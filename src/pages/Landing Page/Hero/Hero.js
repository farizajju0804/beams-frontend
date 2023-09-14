import "./Hero.css";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
const Hero = () => {
  const [cookies,setCookie]=useCookies(["loggedIn"])
  const navigate = useNavigate();
  useEffect(()=>{
    sessionStorage.setItem("login",true)
  },[])
  return (
    <section className="hero">
      <div className="content">
        <h1 className="beams">The GPS For Your Future</h1>
        <div className="hero-content">
        <h3 className="unleashing-the-light">
        Built For Learners. Leaders. Legends.
        </h3>
        <p>Short and powerful insights into the forces reshaping our world.</p>
        </div>
        
        
        <button className="primary-button1" onClick={()=>{
          if(cookies.loggedIn){
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
