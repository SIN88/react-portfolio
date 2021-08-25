import './Header.css'
const Header = ({heading}) => {
    return       <header className="shadow-lg  p-4">
    <h1>{heading || 'PORTFOLIO'}</h1>
  </header>
} 

export default Header;