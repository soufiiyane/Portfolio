import '../assets/css/Menu.css';
import React, { useState, useEffect } from 'react';
import Resume from '../Resume.pdf'
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
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${menuClass}`}>
      <p>Logo</p>
      <ul>
          <li><a href='#'><span>01.</span>About</a></li>
          <li><a href='#'><span>02.</span>Experience</a></li>
          <li><a href='#'><span>03.</span>Work</a></li>
          <li><a href='#'><span>04.</span>Contact</a></li>
          <li><a href={Resume}>Resume</a></li>
      </ul>
      <div className='humberger-Container'>
        <input id="toggle" type="checkbox"></input>
        <label htmlFor="toggle" className="hamburger">
          <div className="top-bun"></div>
          <div className="meat"></div>
          <div className="bottom-bun"></div>
          <aside>
            <ul>
                <li><a href='#'><span>01.</span>About</a></li>
                <li><a href='#'><span>02.</span>Experience</a></li>
                <li><a href='#'><span>03.</span>Work</a></li>
                <li><a href='#'><span>04.</span>Contact</a></li>
                <li><a href='#'>Resume</a></li>
            </ul>
        </aside>
        </label>
      </div>
    </nav>
  );
}
  
export default Menu;
  