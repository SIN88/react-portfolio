import './Projects.css'
import game from"../../Images/game.gif";
import ufc from"../../Images/ufcpage.gif";
import { Image } from 'react-bootstrap';


const Projects = () => {
    return       <div className="projects shadow-lg  p-2 mb-2 bg rounded">
      
    <h1 id="Projects">Projects</h1>

    {/*<a href="https://github.com/SIN88/ufc-2"> Project 1 </a>*/}


    <div className="card">
  <Image src={ufc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text"><a href="https://github.com/SIN88/ufc-2"> UFC Springtime Sports </a>
    This is a simple app that lets you look up ufc rankings,stats, it uses an API KEY to bring in information.</p></div>
</div>


    {/*<a href="https://project2nrk.herokuapp.com/">NRK</a>*/}
    <div className="card">
  {/* <img src={game} className="card-img-top" alt="..."></img> */}
  <Image src={game} fluid className="card-img-top" alt ="..." />
  <div className="card-body">
    <p className="card-text"><a href="https://project2nrk.herokuapp.com/">NRK</a> This application is a game built with Phaser.
                         It has alternating platforms with different levels of difficulty, a login page, and a high score keeper .</p>
  </div>
  </div>
  </div>

    
       
    
  
 
}

export default Projects;