import React from 'react';
import headshot from '../assets/images/headshot.png'
import resume from '../assets/images/resume.png'


function About() {
    return (
        <section>
            <div className='about-container'>
                <div className='resume-container'>
                    <img className='resume' src={resume} alt='Gillians Resume'/>
                </div>
                <div className='stats-photo'>
                    <div className='stats'> 
                        <h5>About Me</h5>
                        <p>Gillain Flatt (she/they)</p>
                        <p>Height 5'5</p>
                        <p>Hair Color: Ginger</p>
                        <p>Eye Color: Green</p>
                        <p>Location: Indianapolis, IN</p>
                    </div>
                    <img className='about-photo' src={headshot} alt='Gillians headshot'/>
                </div>
            </div>
        </section>
    )
}

export default About;