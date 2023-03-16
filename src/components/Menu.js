import '../assets/css/Menu.css';
import React, { useState, useEffect } from 'react';
import Resume from '../Resume.pdf';
import WOW from 'wowjs';
import "../../node_modules/wowjs/css/libs/animate.css";

function Menu() {

  const [menuClass, setMenuClass] = useState('');

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      setMenuClass('scrolled');
    } else {
      setMenuClass('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`wow fadeInDown ${menuClass}`} data-wow-duration="1s">
      <p className='wow fadeInDown' data-wow-duration=".2s">Logo</p>
      <ul>
          <li className='wow fadeInDown' data-wow-duration=".2s"><a href='#about'><span>01.</span>About</a></li>
          <li className='wow fadeInDown' data-wow-duration=".4s"><a href='#'><span>02.</span>Experience</a></li>
          <li className='wow fadeInDown' data-wow-duration=".6s"><a href='#'><span>03.</span>Work</a></li>
          <li className='wow fadeInDown' data-wow-duration=".8s"><a href='#'><span>04.</span>Contact</a></li>
          <li className='wow fadeInDown' data-wow-duration="1s"><a href={Resume}>Resume</a></li>
      </ul>
      <div className='humberger-Container'>
        <input id="toggle" type="checkbox"></input>
        <label htmlFor="toggle" className="hamburger">
          <div className="top-bun"></div>
          <div className="meat"></div>
          <div className="bottom-bun"></div>
          <aside className='wow fadeInRight' data-wow-duration="2s">
            <ul>
              <li className='wow fadeInDown' data-wow-duration=".2s"><a href='#'><span>01.</span>About</a></li>
              <li className='wow fadeInDown' data-wow-duration=".4s"><a href='#'><span>02.</span>Experience</a></li>
              <li className='wow fadeInDown' data-wow-duration=".6s"><a href='#'><span>03.</span>Work</a></li>
              <li className='wow fadeInDown' data-wow-duration=".8s"><a href='#'><span>04.</span>Contact</a></li>
              <li className='wow fadeInDown' data-wow-duration="1s"><a href={Resume}>Resume</a></li>
            </ul>
        </aside>
        </label>
      </div>
    </nav>
  );
}
  
export default Menu;
  