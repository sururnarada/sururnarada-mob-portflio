import React from 'react';
import './Header.css';
import Cta from './Cta';
import me from '../../assets/mee2.png';
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i'm</h5>
        <h1>Achmad Surur</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <Cta></Cta>
        <HeaderSocials />

        <div className="me">
          <img src={me} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
