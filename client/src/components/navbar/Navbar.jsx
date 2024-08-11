import { Link } from 'react-router-dom';
import './navbar.css';
// import {kenya} from './assets/kenya.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
          <Link to='/'>
            <span className='logo'>protioBooking</span>
          </Link>
            <div className='navItems'>
              <button className='navButton'>KES</button>
              {/* <button className='navButton'><img src='kenya' alt='Kenya'/></button> */}
              <button className='navButton'>?</button>
              <button className='navButton'>List your property</button>
                <button className='navButton'>Register</button>
                <button className='navButton'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar