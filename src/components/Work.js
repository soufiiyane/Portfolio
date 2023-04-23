import '../assets/css/work.css';
import yinas from '../assets/workImages/yinas.png';
import weshare from '../assets/workImages/weshare.png';
import nft from '../assets/workImages/Nft.png';
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
                    <li>jQuery</li>
                    <li>PHP</li>
                    <li>WordPress</li>
                </ul>
                <a target='_blank' href='https://fitashi.com'>Learn More</a>
            </div>
          </div>
          <div className='work-card wow fadeInDown' data-wow-duration="1s">
            <div className='work-image' >
                <img src={weshare} alt='Yinas Theme'/>
            </div>
            <div className='work-content'>
                <span>Featured Project</span>
                <h4>WeShare Social Network</h4>
                <div className='work-text'>
                    <p>WeShare is a social network app, where you can share posts and like & comment on your friends posts also you can message them or view their profile and follow or unfollow..., this project was my first PHP project back in 2021 and i learned PHP through it and you guessed it the code structure is pretty much shit, but hopefully i can clean it soon, but like the say if it's working don't touch it</p>   
                </div>
                <ul>
                    <li>Bootstrap</li>
                    <li>Javascript (ES6+)</li>
                    <li>jQuery</li>
                    <li>API Calls</li>
                    <li>PHP</li>
                </ul>
                <a target='_blank' href='https://github.com/soufiiyane/WeShare'>Learn More</a>
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
                    <p>Developed a PDF text extraction tool using OpenAI API for automatic summarization of PDF documents. Extracts text from PDF files and generates concise summaries for each page, providing efficient and effective information extraction capabilities. Ideal for busy professionals, students, and anyone seeking a quick overview of lengthy PDF documents.</p>
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
        </div>
    )

}
export default Work;