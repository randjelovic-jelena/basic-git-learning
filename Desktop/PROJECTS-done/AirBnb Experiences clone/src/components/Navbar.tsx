import logo from '../assets/airbnb-logo.png';
import Hero from './Hero';
const Navbar = () => {
  return (<>
    <nav className="navbar">
        <a href="#"><img src={logo} className='logo' alt='airbnb home page'/></a>
    </nav>
    <Hero/>
  </>
  )
}

export default Navbar