import './Apps.css'
import fitnessTracker from"../../Images/fitnessTracker.jpg";
 import fitnessTracker2 from"../../Images/fitnessTracker2.jpg";
 import BudgetTracker from"../../Images/BudgetTracker.gif";
 import Generator from"../../Images/Generator.gif";
 import Last from"../../Images/Last.jpg";
 import { Image } from 'react-bootstrap';
 import React from "react";

const Apps = () => {
    return       <div className="Apps shadow-lg  p-2 mb-2 bg rounded">
    
      
    <h1 id="Apps">Apps</h1>

    


    <div className="card">
  <Image src={fitnessTracker } className="card-img-top" alt="..."/>
   <Image src={fitnessTracker2} className="card-img-top" alt="..."/> 

  <div className="card-body">
    <p className="card-text"><a href="https://frozen-ravine-00061.herokuapp.com/?id=613da5fbf20ada00161e22fc"> Fitness Tracker </a>
    This app tracks your fitness workouts on and offline with a service worker, also it is deployed using heroku .<a href="https://github.com/SIN88/Fitness-Tracker18.git">GitHub</a></p></div>
</div>


    
     <div className="card"> 
  
  <Image src={BudgetTracker} fluid className="card-img-top" alt ="..." /> 
   <div className="card-body"> 
     <p className="card-text"><a href="https://offline-budget-kg.herokuapp.com/">Progressive Budget Tracker</a> This is a budget tracker app that works online 
    and offline deployed to heroku .<a href="https://github.com/SIN88/budget-offline.git">Github</a></p> 

 </div>

     <div className="card"> 
  
   <Image src={Generator} fluid className="card-img-top" alt ="..." /> 
   <div className="card-body"> 
     <p className="card-text"><a href=" https://github.com/SIN88/09-homework.git/">Read Me Generator</a> A read me Generator .</p> 

                        
                             <div className="card"> 
  
   <Image src={Last} fluid className="card-img-top" alt ="..." />
   <div className="card-body"> 
     <p className="card-text"><a href="https://github.com/SIN88/week12latehomework.git">Employee Management System</a> This application is made to add,delete and manage employee roles .</p> 


   
                        

    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
       
    
  
 
}

export default Apps;