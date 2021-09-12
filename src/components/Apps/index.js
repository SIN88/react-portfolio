import './Apps.css'
import fitnessTracker from"../../Images/fitnessTracker.jpg";
import fitnessTracker2 from"../../Images/fitnessTracker2.jpg";
import { Image } from 'react-bootstrap';


const Apps = () => {
    return       <div className="Apps shadow-lg  p-2 mb-2 bg rounded">
    
      
    <h1 id="Apps">Apps</h1>

    


    <div className="card">
  <Image src={fitnessTracker } className="card-img-top" alt="..."/>
  <Image src={fitnessTracker2} className="card-img-top" alt="..."/>

  <div className="card-body">
    <p className="card-text"><a href="https://frozen-ravine-00061.herokuapp.com/?id=613da5fbf20ada00161e22fc"> Fitness Tracker </a>
    This app tracks your fitness workouts on and offline with a service worker, also it is deployed using heroku .</p></div>
</div>


    
    {/* <div className="card"> */}
  
  {/* <Image src={game} fluid className="card-img-top" alt ="..." /> */}
  {/* <div className="card-body"> */}
    {/* <p className="card-text"><a href="https://project2nrk.herokuapp.com/">NRK</a> This application is a game built with Phaser. */}
                         {/* It has alternating platforms with different levels of difficulty, a login page, and a high score keeper .</p> */}

 </div>

    
       
    
  
 
}

export default Apps;