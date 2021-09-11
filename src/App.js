import About from "./components/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Wave from "./components/Wave";
import Wave2 from "./components/Wave2";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar"


function App() {
  return (
    <>
      <Header heading={"Kevin Giron"} />
      
      <main>
        <Navbar/>
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
        

        <section className="light">
         
        <About/>
          
        </section>
        
        
        <section className="dark">
         
        <Contact/>
           <Wave/>
         </section>

        <section className="light">
          <Projects/>

         <Wave2/>
        </section>
        
       
        <section className="dark">
         <Skills/>
         
          <Wave/>
        </section>

        <section className="light">
          <h1>Nice !</h1>
          <p>
            
          </p>

          <Wave2/>
        </section>
       
      </main>
      
      <Footer footing={"Made with ☕"} />
    </>
  );
}

export default App;
