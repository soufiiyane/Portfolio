import '../assets/css/work.css';
import yinas from '../assets/workImages/yinas.png';
import Typerite from '../assets/workImages/Typerite.png';
import Summarizer from '../assets/workImages/PDFSummarizer.png'
import Tiniri from '../assets/workImages/Tiniri.png'


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
            <div className='about-headline wow fadeInDown special-headline' data-wow-duration="1s">
                <div>
                    <span>03.</span>
                    <h2>Projects</h2>
                </div>
                <span></span>
            </div>
        <section id="projects">
            <article >
                <div className="text">
                    <p className='color'>Featured Project</p>
                    <h4>Yinas Theme</h4>
                    <p className="blackbox">
                    <span>Yinas is a meticulously crafted WordPress blog theme that offers unparalleled customization options with ACF (Advanced Custom Fields). With its flexible design, admins can easily manipulate the layout, choose what content to display or hide, and create truly unique and personalized websites. Empowering bloggers to reflect their individuality and creativity.</span>
                    </p>
                    <p>Technologies used include:</p>
                    <ul>
                        <li>JavaScript (ES6+)</li>
                        <li>PHP</li>
                        <li>WordPress (Development)</li>
                        <li>Plugins</li>
                    </ul>
                    <a target='_blank' href='https://fitashi.com/'>Learn More</a>
                </div>
                <div className='image-work-container'>
                    <img src={yinas}  alt="Yinas Wordpress Theme" />
                </div>
            </article>
            <article className='reverse'>
                <div className="text">
                    <p className='color'>Featured Project</p>
                    <h4>Typerite</h4>
                    <p className="blackbox">
                    <span>Typerite is a powerful Symfony blog project. It features a user-friendly admin interface for easy article creation, editing, and management. With robust user authentication, email verification, and optimized performance, Typerite offers a dynamic blogging experience for admins and visitors.</span>
                    </p>
                    <p>Technologies used include:</p>
                    <ul>
                        <li>BootStrap</li>
                        <li>JavaScript (ES6+)</li>
                        <li>PHP</li>
                        <li>Symfony (PHP FrameWork)</li>
                    </ul>
                    <a> Private</a>
                </div>
                <div className='image-work-container'>
                    <img src={Typerite} alt="Typerite Blog" />
                </div>
            </article>
            <article>
                <div className="text">
                    <p className='color'>Featured Project</p>
                    <h4>PDF Summarizer</h4>
                    <p className="blackbox">
                    <span>The PDF Summarizer is a web-based application that allows users to upload their PDF documents and receive a summarized version, Provides a convenient way to summarize lengthy PDF documents using OpenAI</span>
                    </p>
                    <p>Technologies used include:</p>
                    <ul>
                        <li>JavaScript (ES6+)</li>
                        <li>Node.JS</li>
                        <li>Express.JS</li>
                        <li>OpenAI</li>
                    </ul>
                    <a target='_blank' href='https://github.com/soufiiyane/PDF-AISummarizer'>Learn More</a>
                </div>
                <div className='image-work-container'>
                    <img src={Summarizer} alt="Screenshot of the Wall of Wonder." />
                </div>
            </article>
            <article className='reverse'>
                <div className="text">
                    <p className='color'>Featured Project</p>
                    <h4>Tiniri Extension</h4>
                    <p className="blackbox">
                    <span>
                    Tiniri is VSCode dark theme extension inspired by the captivating Berber culture of Morocco. With its unique blend of darkness and elegance, it brings a touch of cultural richness to coding environment, Let the Tiniri theme envelop you in its enigmatic allure and elevate your coding workflow to new levels of creativity and productivity.
                    </span>
                    </p>
                    <p>Technologies used include:</p>
                    <ul>
                        <li>JavaScript (ES6+)</li>
                        <li>VSCode (Theme develoment)</li>
                    </ul>
                    <a target='_blank' href='https://marketplace.visualstudio.com/items?itemName=soufiyane.tiniri'>Learn More</a>
                </div>
                <div className='image-work-container'>
                    <img src={Tiniri} alt="Tiniri Extension" />
                </div>
            </article>
            
        </section>
    </div>
    )
}
export default Work;