import "./Hero.css";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="content">
        <h1 className="beams">Your GPS For The Future</h1>
        <h3 className="unleashing-the-light">
          Unleashing the Light of Knowledge!
        </h3>
        <button className="primary-button1" onClick={()=>{
          if(localStorage.getItem("authToken")){
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
