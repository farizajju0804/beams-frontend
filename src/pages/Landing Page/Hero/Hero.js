import "./Hero.css";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
const Hero = () => {
  const [cookies,setCookie]=useCookies(["loggedIn"])
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="content">
        <h1 className="beams">The GPS For Your Future</h1>
        <h3 className="unleashing-the-light">
        Built For Learners. Leaders. Legends.
        </h3>
        <p>Short and powerful insights into the forces reshaping our world.</p>
        <button className="primary-button1" onClick={()=>{
          if(cookies.loggedIn){
            navigate(`/beams`)
          }
          else{
            navigate("/login");
          }
        }}>
          <div className="btn" >Get started</div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
