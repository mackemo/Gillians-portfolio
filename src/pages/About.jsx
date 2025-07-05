import React, { useState, useEffect } from 'react';
import headshot from '../assets/images/headshot.png';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            >

        <section>
            <div className="about-container">
                <h3 className="about-title">About Me</h3>

                <div className="about-content">
                    <div className="about-left">
                        <div className="photo-container">
                            <img className="about-photo" src={headshot} alt="Gillians headshot" />
                        </div>
                        <div className="stats">
                            <p>Gillian Flatt (she/they)</p>
                            <p>Height: 5'5</p>
                            <p>Hair Color: Ginger</p>
                            <p>Eye Color: Green</p>
                            <p>Location: Indianapolis, IN</p>
                        </div>
                    </div>

                    <div className="intro-container">
                        <p className='intro'>
                            Murmurs from the house, a last minute prop check, and...
                            <br></br>
                            <br></br>
                            My name is Gillian Flatt and I am an Indianapolis based actor, singer, and costume designer. Throughout the past four years I have 
                            been cultivating my love for storytelling and pushing myself to learn new tools in order to tell those stories. I hold immense value 
                            in trying to find new angles and aspects of theatre as we all lift each other up as artists. Outside of theatre I enjoy writing, 
                            drawing, and showing off pictures of my french bulldog, Kevin! Please feel free to take some time to peruse my past acting and 
                            costume design projects, and I hope to work with you soon ◡̈
                            <br></br>
                            <br></br>
                            ...Lights down, curtain up, and away we go!
                        </p>
                    </div>
                </div>
            </div>
        </section> 
    </motion.div>
  );
}

export default About;
