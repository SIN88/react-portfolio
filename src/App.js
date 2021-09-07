import About from "./components/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Wave from "./components/Wave";
import Wave2 from "./components/Wave2";

function App() {
  return (
    <>
      <Header heading={"Kevin Giron"} />
      <main>
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
          <h1>Nice Curves!</h1>
          <p>
            under contact
          </p>

         <Wave2/>
        </section>
        
       
        <section className="dark">
          <h1>Nice Curves!</h1>
          <p>
           this is dark and straight 
          </p>
          <Wave/>
        </section>

        <section className="light">
          <h1>Nice Curves!</h1>
          <p>
            heyheyhey
          </p>

          <Wave2/>
        </section>
       
      </main>
      
      <Footer footing={"Made with ☕"} />
    </>
  );
}

export default App;
