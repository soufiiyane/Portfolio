import '../assets/css/Experience.css'
import { Chrono } from "react-chrono";
import React, { useState, useEffect } from 'react';
import WOW from 'wowjs';
import "../../node_modules/wowjs/css/libs/animate.css";
function Experience(){
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);
    const items = [
      {
        title: "Present",
        cardTitle: "Junior Web Developer",
        cardSubtitle:"TMT company",
        cardDetailedText: "Working as junior web developer i have a diverse range of responsibilities. My areas of expertise include working with React.js, Symfony, and CMS WordPress plugin and theme development. I handle multiple roles and tasks within these frameworks to contribute effectively to the development process"
      },
      {
        title: "Present",
        cardTitle: "Engineering Student",
        cardSubtitle:"Moroccan School of Engineering Sciences",
        cardDetailedText: "After obtaining a BTS degree in Computer Science, I decided to pursue an engineering degree in Computer Science at the prestigious Moroccan School of Engineering Sciences. Simultaneously, working as a Junior Web Developer"
      },
      {
        title: "Jun 2022",
        cardTitle: "BTS in Computer Science",
        cardSubtitle:"Specialized Institute of Applied Technology",
        cardDetailedText: "I successfully completed my studies with outstanding achievement, earning a score of 95 out of 100, It was during this time that my passion for Computer Science grew more and more."
      }  
    ];
    return(
        <div id='experience' className='experience  wow fadeIn' data-wow-duration="3s">
          <div className='about-headline specialCase'>
            <div>
                <span>02.</span>
                <h2>Experience</h2>
            </div>
            <span></span>
          </div>
            <Chrono items={items}  mode="VERTICAL" />
        </div>
    )
}

export default Experience;