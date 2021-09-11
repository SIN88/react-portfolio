import './About.css';
import profilePic from'./src/Images/profilePic.jpg';

//import imageName from '../../assets/images/imageName.jpg';
   
// inside return 
<img src={profilePic} alt=""/>

const About  =() => {
    return <>
    <h1 id="About">About Me</h1>
    {/*<img src="/images/profilepic.jpg" alt=""/>*/}
    {/*<img src={"profilepic.jpg"} alt=""/>*/}
    
    
    <p>
     Greetings!!! My name is Kevin. I am a web developer in Huntington Harbour, California.
     Looking implement and grow my newly aquired skills.
     
    </p>
  </>
}
export default About;