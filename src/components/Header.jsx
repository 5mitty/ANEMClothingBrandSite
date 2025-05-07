import React from 'react';
import { Link } from 'react-router-dom';
import '../Header.css'; 
import homeBg from '../assets/ANEMLOGOS_06.png'; 
import erasBg from '../assets/ANEMLOGOS_07.png';
import shopBg from '../assets/ANEMLOGOS_08.png';
import aboutBg from '../assets/ANEMLOGOS_09.png';
import homeBgHover from '../assets/ANEMLOGOS_01.png'; 
import erasBgHover from '../assets/ANEMLOGOS_02.png';
import shopBgHover from '../assets/ANEMLOGOS_03.png';
import aboutBgHover from '../assets/ANEMLOGOS_04.png';
import headerBg from '../assets/ANEMBANNERHEADER.jpg';

// style={{ backgroundImage: `url(${headerBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}

function Header() {
  return (
    <header className="header" >
      <div className="header-content">
        <div className="header-title">A New Era of Me</div>
        <nav className='headerNav'>
          <ul className="nav-list">
            <li className="navItemWithBg" style={{ backgroundImage: `url(${homeBg})` }}>
              <Link to="/home" className="navListItem" id="nav1" >
                <div className='navListItemTopPart'></div>
                <div className='navListItemTitle'>Home</div>
              </Link>
            </li>
            <li className="navItemWithBg" style={{ backgroundImage: `url(${erasBg})` }}>
              <Link to="/eras" className="navListItem" id="nav2" >
              <div className='navListItemTitle'>Eras</div>
              </Link>
            </li>
            <li className="navItemWithBg" style={{ backgroundImage: `url(${shopBg})` }}>
              <Link to="/shop" className="navListItem" id="nav3" >
              <div className='navListItemTitle'>Shop</div>
              </Link>
            </li>
            <li className="navItemWithBg" style={{ backgroundImage: `url(${aboutBg})` }}>
              <Link to="/about" className="navListItem" id="nav4" >
              <div className='navListItemTitle'>About</div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;


