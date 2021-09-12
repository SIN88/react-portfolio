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
      <Header heading={"Kevin Giron"} />

        <Navbar>
          <ul>
          
            <li>
              <Link to="./components/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contaact</Link>
            </li>
          </ul>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
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
       
      
      
//       <Footer footing={"Made with ☕"} />
    
    
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
