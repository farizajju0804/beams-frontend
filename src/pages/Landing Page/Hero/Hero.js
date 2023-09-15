import "./Hero.css";
import { useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";
import { useEffect } from "react";
import {Cookies} from "react-cookie";
const Hero = () => {
  const cookies=new Cookies();
  // const [cookies,setCookie]=useCookies(["loggedIn"])
  const navigate = useNavigate();
  useEffect(()=>{
    sessionStorage.setItem("login",true)
  },[])
  return (
    <section className="hero">
      <div className="content">
        <h1 className="beams">The GPS <br/>For Your Future</h1>
        <h3 className="unleashing-the-light">
        Built For <br/>Learners. Leaders. Legends.
        </h3>
        <p>Short and powerful insights into <br/>the forces reshaping our world.</p>
        
        
        <button className="primary-button1" onClick={()=>{
          if(cookies.get("loggedIn")){
            navigate(`/beams`)
          }
          else{
            navigate("/signup");
          }
        }}>
          <div className="btn" >Get started</div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
