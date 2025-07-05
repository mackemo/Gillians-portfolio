import React from 'react';
import headshot from '../assets/images/headshot.png'
import linkedin from '../assets/images/linkedin.png'
import resume from '../assets/images/resume-icon.png'
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';


function Home() {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
            <main className="home-container">
                <div className='home-text'>
                    <h2 className='title'>
                        <TypeAnimation
                        sequence={[
                            'Actor, Singer, and Designer',  
                            1000                      
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}              
                        />
                    </h2>
                    <div className="home-buttons">
                        <a href="/about">
                            <button className="home-button">About Me</button>
                        </a>
                        <a href="/gallery">
                            <button className="home-button">Photo Gallery</button>
                        </a>
                    </div>
                    <div className='contact-info'>
                        <p>615-939-1540</p>
                        <p>gillianflatt@me.com</p>
                        <p>Indianapolis, IN</p>
                        <p>Nashville, TN</p>
                    </div>
                </div>

                <div className='home-image-wrapper'>
                    <div className='home-image'>
                        <img className='headshot' src={headshot} alt="Headshot of Gillian" />
                    </div>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/gillian-flatt-280732368/" target="_blank" rel="noopener noreferrer">
                        <img className="icon" src={linkedin} alt="Linkedin"/>
                        </a>
                        <a href="/resume">
                        <img className="icon" src={resume} alt="Resume"/>
                        </a>
                    </div>
                </div>
            </main>
        </motion.div>
    )
}

export default Home;