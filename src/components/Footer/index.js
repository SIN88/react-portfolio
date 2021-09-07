import './Footer.css'
const Footer = ({footing,light}) => {
    return       <footer className="shadow-sm  p-1 mb-1 bg rounded">
    <h1>{footing || 'PORTFOLIO'}</h1>
        <a href="https://www.linkedin.com/in/kevin-giron-869598202/ ">Linkedin</a>
        <a href="mailto:kg19882020@gmail.com">Email Me</a>
        <a href="https://github.com/SIN88">Github</a>
  </footer>
} 

export default Footer;