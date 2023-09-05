import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const VerificationSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="loginpage">
      <div>
        <Toaster
        />
      </div>
      <div className="logincont">
        <div className="emailverificationdiv">
          <h2>Verification Successful!</h2>
          <img
            src={"https://media.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif"}
            alt=""
            style={{
              width: "150px",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          />
          <div className="verificationbox">
            <h3 style={{
              textAlign: "center"
            }} >Welcome to the future, innovator!</h3>
            <p>Your email has been verified, let's unlock new frontiers together.</p>
            <p>Login now and explore the endless possibilities</p>
          </div>
          <button
            className="loginsignbtn"
            onClick={() => {
              navigate("/login");
            }}
          >
            Go To Log In
          </button>
        </div>
      </div>
    </div>
  );
};
