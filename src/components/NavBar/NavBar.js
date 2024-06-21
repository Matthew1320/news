import React, {useState} from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#courses'>Courses</a></p>
    <p><a href='#projects'>Projects</a></p>
    <p><a href='#contact'>Contact</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='my__navbar'>
      <div className='my__navbar-logo'>
        <h1>MG</h1>
      </div>
      <div className='my__navbar-links'>
          <Menu />
      </div>
      <div className='my__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='my__navbar-menu_container scale-up-center'>
            <div className='my__navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar