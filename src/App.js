import About from "./components/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Wave from "./components/Wave";
import Wave2 from "./components/Wave2";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Apps from "./components/Apps";
// import Home from "./components/Home"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from "react-router-dom";

 function App() {
  return (
    <Router>
      <div>
        <Wave />
      <Header heading={"Kevin Giron"} />

        <Navbar>
          <ul>
            <li>
              <Link to="/Home">🤖</Link>
            </li>
          
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
            <Link to="/Skills">Skills</Link>
            </li>
            <li>
              <Link to="/Projects">About</Link>
            </li>
            <li>
              <Link to="/Apps">Apps</Link>
            </li>
        </ul>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        {/* <section className="light"> */}
        <Route  exact   path="/About"  render={() => <About />}/>
        {/* </section> */}
        {/* <Route path="/about" ={About} /> */}
          {/* <Route path="/About"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route path="/Contact"> */}
          <Route  exact   path="/Contact"  render={() => <Contact />}/>
            {/* <Contact /> */}
          {/* </Route> */}
          <Route  exact   path="/Skills"  render={() => <Skills />}/>

          {/* <Route path="/Skills"> */}
            {/* <Home /> */}
          {/* </Route> */}
          <Route  exact   path="/Projects"  render={() => <Projects />}/>
          <Route  exact   path="/Apps"  render={() => <Apps />}/>

        </Switch>
      </div>
    </Router>
    
  );
}

// function Home() {
  // return <h2>Home</h2>;
// }


// <section className="light">
         
// <About/>
  
// </section>


// <section className="dark">
// <Contact/>
//            <Wave/>
//          </section>

//         <section className="light">
//           <Projects/>

//          <Wave2/>
//         </section>
//         <section className="light">
//           <Projects/>

//          <Wave2/>
//         </section>
        
       
//         <section className="dark">
//          <Skills/>
         
//           <Wave/>
//         </section>

//         <section className="light">
//           <Apps/>

//           <Wave2/>
//         </section>
       
      
      
      // <Footer footing={"Made with ☕"} />
    
    
//   );
// }


export default App;




{/* </main> */}
{/* function App() { */}
  {/* return ( */}
    {/* <> */}
      {/* <Header heading={"Kevin Giron"} /> */}
      
      {/* <main> */}
        {/* <Navbar/> */}
        {/* <Section light title={'About Me'} />
        <Section />
        <Section light />
        <Section /> */}
        {/* <section className="dark">
          <h1>Nice Curves!</h1>
          <p>
            A website is like a road. The more curves it has the more
            interesting it is.
          </p>
        </section> */}
        

        {/* <section className="light"> */}
         
        {/* <About/> */}
          
        {/* </section> */}
        
        
        {/* <section className="dark"> */}
         
        {/* <Contact/> */}
           {/* <Wave/> */}
         {/* </section> */}

//         <section className="light">
//           <Projects/>

//          <Wave2/>
//         </section>
        
       
//         <section className="dark">
//          <Skills/>
         
//           <Wave/>
//         </section>

//         <section className="light">
//           <Apps/>

//           <Wave2/>
//         </section>
       
//       </main>
      
//       <Footer footing={"Made with ☕"} />
//     </>
//   );
// }

// export default App;
