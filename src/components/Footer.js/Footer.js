import './Footer.css'
const Footer = ({footing,light}) => {
    return       <footer className="shadow-lg  p-4 mb-2 bg rounded">
    <h1>{footing || 'PORTFOLIO'}</h1>
    <p></p>
  </footer>
} 

export default Footer;