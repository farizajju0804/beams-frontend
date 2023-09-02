import React, { useContext, useState } from "react";
import "./Login.css";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import applelogo from "../../assets/Apple.png";
import facebooklogo from "../../assets/facebook.png";
import googlelogo from "../../assets/Google.png";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import loginimg from "../../assets/loginimg.png";
import { API } from "../../constants";
import { setToken } from "../../helpers";
import { useAuthContext } from "../../context/AuthContext";
import ClipLoader from "react-spinners/ClipLoader";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useEffect } from "react";

export const Login = () => {
  const [ispassvis, setIspassvis] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailborder, setEmailborder] = useState(false);
  const [passwordborder, setPasswordborder] = useState(false);
  //   const { setUser, user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [rememberme, setRememberme] = useState(true);
  const navigate = useNavigate();

  const { user, setUser, token, isLoggedIn } = useContext(AuthContext);

    

  console.log(isLoggedIn);
  const logIn = async () => {
    setIsLoading(true);
    try {
      const value = {
        identifier: email,
        password: password,
      };
      const response = await fetch(`${API}/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const data = await response.json();
      if (data?.error) {
        throw data?.error;
      } else {
        if (rememberme) {
          console.log(data.jwt)
          setToken(data.jwt);
        }
        console.log(data.user)
        sessionStorage.setItem("uid",data.user.id)
        setUser(data.user);

        toast.success(`Welcome back ${data.user.username}!`);
        navigate(`/beams`, { replace: true });
      }
    } catch (error) {
      if (error.message === "Invalid identifier or password") {
        toast.error("Invalid email or Password");
      } else {
        toast.error(error.message);
      }
      setError(error?.message ?? "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = () => {
    if (!email) {
      setEmailborder(true);
      toast.error("Email Required");

      return;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      // setErrors("Invalid email address");
      setEmailborder(true);
      toast.error("Invalid email address");
      return;
    }

    if (!password) {
      setPasswordborder(true);
      toast.error("Check Password");
      return;
    }

    logIn();
  };

  return (
    <div className="loginpage">
      <Toaster
        containerStyle={{
          position: "absolute",
          top: "90px",
        }}
      />
      <div></div>
      <div className="logincont">
        <h2>Login</h2>
        <div className="loginitem">
          {/* <label htmlFor="email">Enter Your Email Address</label> */}
          <input
            className={emailborder ? "inputborderred logininput" : "logininput"}
            type="text"
            id="email"
            placeholder="Enter Your Email Address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div className="loginitem">
          {/* <label htmlFor="email">Enter Your Secure Password</label> */}
          <input
            className={passwordborder ? "inputborderred logininput" : "logininput"}
            // className="logininput"
            value={password}
            type={ispassvis ? "text" : "password"}
            id="password"
            placeholder="Enter Your Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          {ispassvis ? (
            <AiFillEyeInvisible
              className="eyeicons"
              size={22}
              onClick={() => {
                setIspassvis(!ispassvis);
              }}
            />
          ) : (
            <AiFillEye
              className="eyeicons"
              size={22}
              onClick={() => {
                setIspassvis(!ispassvis);
              }}
              color={"#f96f2e"}
            />
          )}
        </div>
        <div className="loginoptions">
          <div className="loginremember">
            {/* <input
							type="checkbox"
							onChange={(e) => {
								setRememberme(e.target.checked);
							}}
							id="logincheck"
							defaultChecked
						/> */}
            {/* <label htmlFor="logincheck">Remember Me</label> */}
          </div>
          <span
            onClick={() => {
              navigate("/resetpassword");
            }}
          >
            Forgot Password?
          </span>
        </div>
        <button
          className="loginsignbtn"
          onClick={() => {
            
            signIn();
          }}
        >
          {isLoading ? <ClipLoader color="white" size={23}></ClipLoader> : "Log In"}
        </button>
        <p className="noaccout">
          No account? &nbsp;{" "}
          <strong
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </strong>{" "}
        </p>
        <div className="orloginwith">
          <strong style={{ margin: "10px" }}>or</strong>
          <strong>-- Login using --</strong>
        </div>
        <div className="oauths">
          <a href={`${API}/connect/google`}>
            <img src={googlelogo} alt="" />
          </a>
          <img src={facebooklogo} alt="" />
          <img src={applelogo} alt="" />
        </div>
      </div>
      <img src={loginimg} alt="" className="loginimgpos" />
    </div>
  );
};
