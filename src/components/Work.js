import '../assets/css/work.css';
import yinas from '../assets/workImages/yinas.png';
import Typerite from '../assets/workImages/Typerite.png';
import Summarizer from '../assets/workImages/PDFSummarizer.png'

import React, { useState, useEffect } from 'react';
import WOW from 'wowjs';
import "../../node_modules/wowjs/css/libs/animate.css";

function Work(){

    useEffect(() => {
        const wow = new WOW.WOW({
          live: false,
        });
        wow.init();
    }, []);

    return(
        <div id='work' className="work" >
            <div className='about-headline wow fadeInDown' data-wow-duration="1s">
                <div>
                    <span>03.</span>
                    <h2>Projects</h2>
                </div>
                <span></span>
            </div>
          <div className='work-card wow fadeInDown' data-wow-duration="1s">
            <div className='work-image' >
                <img src={yinas} alt='Yinas Theme'/>
            </div>
            <div className='work-content'>
                <span>Featured Project</span>
                <h4>Yinas WordPress Theme</h4>
                <div className='work-text'>
                    <p>Yinas is a wordpress blog theme developed by me, back then i was learning about wordpress development, and thought wouldn't be just so cool to develop a blog theme ? and i took it as a challenge. i tried to make yinas theme dynamically as much as possible with ACF (Advanced Custom Fields), and giving the admin the freedom to play with layout as he wants and to choose what to show and what to hide and reorganize the structure whenever he wants.</p>   
                </div>
                <ul>
                    <li>Bootstrap</li>
                    <li>Javascript (ES6+)</li>
                    <li>o</li>
                    <li>PHP</li>
                    <li>WordPress</li>
                </ul>
                <a target='_blank' href='https://fitashi.com'>Learn More</a>
            </div>
          </div>
          <div className='work-card wow fadeInDown' data-wow-duration="1s">
            <div className='work-image' >
                <img src={Summarizer} alt='Yinas Theme'/>
            </div>
            <div className='work-content'>
                <span>Featured Project</span>
                <h4>PDF Summarizer</h4>
                <div className='work-text'>
                    <p>A web-based application that utilizes PDF.js library to extract text from PDF pages and OpenAI API to generate summarized versions of the extracted text. Provides a convenient way to summarize lengthy PDF documents using AI-powered technology, making it easier to review and understand the content.</p>
                </div>
                <ul>
                    <li>Javascript (ES6+)</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>OpenAI</li>
                </ul>
                <a target='_blank' href='https://github.com/soufiiyane/Shopping-Cart'>Learn More</a>
            </div>
          </div>
          <div className='work-card wow fadeInDown' data-wow-duration="1s">
            <div className='work-image' >
                <img src={Typerite} alt='Typerite'/>
            </div>
            <div className='work-content'>
                <span>Featured Project</span>
                <h4>Typerite</h4>
                <div className='work-text'>
                    <p>Typerite is a powerful and scalable blog project developed using PHP, incorporating best practices of object-oriented programming (OOP) and design patterns. With a user-friendly admin interface, Typerite allows admins to effortlessly create, edit, and manage articles, video and audio links, and visitor comments. Robust user authentication with email verification, input validation, and password encryption ensures data security. The project is designed for maintainability.</p>
                </div>
                <ul>
                    <li>Javascript (ES6+)</li>
                    <li>PHP</li>
                    <li>Ajax</li>
                    <li>OOP & Design Patterns</li>
                </ul>
                <a target='_blank' href='#'>Learn More</a>
            </div>
          </div>
        </div>
    )

}
export default Work;