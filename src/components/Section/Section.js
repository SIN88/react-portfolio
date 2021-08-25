import './Section.css'
const Section = ({title, light}) => {
    return <section className={light ? "light": "dark"}>
    <h1>About Me</h1>
    <p>
     Greetings!!! My name is Kevin. I am a web developer in Huntington Harbour, California.
     Looking implement and grow my newly aquired skills.
     
    </p>
  </section>
}

export default Section;