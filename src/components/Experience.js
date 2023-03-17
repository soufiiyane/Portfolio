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
    const items = [{
        title: "Jun 2022",
        cardTitle: "BTS in Computer Science",
        cardSubtitle:"Specialized Institute of Applied Technology",
        cardDetailedText: "throught this program i learned so much about web development and technologies like (HTML5,CSS3,Javascript,XML,C#,.Net...) it was very fun period in my life that really shaped me into the men i am today ! to add i got graduate with a score of 95 out 100"
      },
      {
        title: "Aug 2022",
        cardTitle: "Back-end developer",
        cardSubtitle:"TMT company",
        cardDetailedText: "it was really amzing experience and fun at the same time to work with people that i share with same passion,i worked with technologies such as WordPress,Symfony"
      },
      {
        title: "Oct 2022",
        cardTitle: "Engineering Student",
        cardSubtitle:"Moroccan School of Engineering Sciences",
        cardDetailedText: "I am presently in my third year of pursuing an engineering degree in Computer Science"
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