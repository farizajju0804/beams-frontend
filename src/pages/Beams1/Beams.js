import React, { useEffect } from "react";
import "./Beams.css";
import LowCard from "../../models/LowCard/LowCard";
import TrendingCard from "../../models/TrendingCard/TrendingCard";
import { useState, useContext } from "react";
import { API } from "../../constants";
import { toast, Toaster } from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { WelcomePopUp } from "../../models/WelcomePopUp/WelcomePopUp";
// import { useCookies } from 'react-cookie'
function Beams() {
  const { user, setArticles, articles } = useContext(AuthContext);
  // const [cookies,setCookie]=useCookies(['login'])
  const [launch, setLaunch] = useState(null);
  const [trending, setTrending] = useState();
  const [welcomepopupsate, setWelcomepopupsate] = useState(false);
  useEffect(() => {
    if (user) {
      const expirationTime = new Date();
      expirationTime.setSeconds(expirationTime.getSeconds+10);

          fetch(`${API}/trending-cards?populate=*`).then((res) => res.json())
          .then((trending)=>{ 
            console.log(trending)
            const serverDate = new Date(user.createdAt);
            
            const currentDate = new Date(); 
           
            const timeDifference = currentDate - serverDate;
      
            const daysDifference =Math.floor(timeDifference / (1000 * 60 * 60 * 24))
            const showContents=Math.floor((daysDifference/7)) 
            console.log(trending.data)
            const mapData=trending.data.sort((a, b) => new Date(a.attributes.createdAt) - new Date(b.attributes.createdAt)).map((el,index)=>{
               if(user.role.name==="admin") return {...el.attributes,show:true}
                if (index<=showContents || index===0) return {...el.attributes,show:true}
                else return {...el.attributes,show:false,remainingTime:Math.floor(((index*604800000)-timeDifference)/(3600*1000))}
            })
          
          console.log(mapData);
          setTrending(mapData);
        });
    }
  }, [user]);

  return (
    <div className="beams-section">

{user && user.newuser && !welcomepopupsate && (
            <WelcomePopUp
              handleClose={() => {
                console.log("close")
                setWelcomepopupsate(true);
              }}
            />
          )}
      <Toaster></Toaster>

      {user ? (
        <div>
          
          <div className="beams-header-container">
            <h1>Ignite Your Success with Beams</h1>
            {/* <img className='beams-hero' src="Assets/images/beams-hero.png" alt=""/> */}
          </div>
          <div className="beams-content-container">
            {/* <div className='low-container'>
                <div className='low-box'>
                    Launch Of The Week
                </div>
                {
                  launch?<LowCard 
                  // lowImg='Assets/images/intro-main-image-synthetic-bio.png'
                  {...launch}
                  />:
                  <p>loading..</p>
                }
                
            </div> */}

            <div className="trending-container">
              <div className="trending-box">Trending Beams</div>
              <div className="trending-content-container">
                {trending ? (
                  trending.map((trending) => (
                    <TrendingCard
                      toast={(msg) => toast.error(msg)}
                      {...trending}
                    />
                  ))
                ) : (
                  <p>loading...</p>
                )}
              </div>
            </div>
          </div>

          <div></div>
        </div>
      ) : (
        <p>user loading</p>
      )}
    </div>
  );
}

export default Beams;
