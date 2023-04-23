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
            <div className='about-headline wow fadeInDown special-headline' data-wow-duration="1s">
                <div>
                    <span>03.</span>
                    <h2>Projects</h2>
                </div>
                <span></span>
            </div>
        <section id="projects">
            <article>
                <div class="text">
                    <h4>Latest Project</h4>
                    <h3>Yinas Theme</h3>
                    <p class="blackbox">
                        Description of the project. This should be fairly concise while
                        also describing the key components that you developed or worked
                        on. It can be as long as you need it to be but should at least be
                        a few sentences long. Be sure to include specific links anywhere
                        in the description. A link looks like
                    </p>
                    <h4>Technologies used include:</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SVG</li>
                    </ul>
                </div>
                <img src={yinas} alt="Screenshot of the Wall of Wonder." />
            </article>
        </section>
    </div>
    )

}
export default Work;