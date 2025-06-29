import React, { useState, useEffect } from 'react';
import headshot from '../assets/images/headshot.png';
import resume from '../assets/images/resume.png';

function About({ setHideNavbar }) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoom = () => setIsZoomed(true);
  const closeZoom = () => setIsZoomed(false);

  // Hide navbar when zoomed in
  useEffect(() => {
    if (setHideNavbar) {
      setHideNavbar(isZoomed);
    }

    return () => {
      if (setHideNavbar) setHideNavbar(false);
    };
  }, [isZoomed, setHideNavbar]);

  return (
    <section>
      <div className="about-container">
        <div className="stats-container">
          <div className="stats-header">
            <h3>About Me</h3>
            <div className="stats">
              <p>Gillain Flatt (she/they)</p>
              <p>Height 5'5</p>
              <p>Hair Color: Ginger</p>
              <p>Eye Color: Green</p>
              <p>Location: Indianapolis, IN</p>
            </div>
          </div>
        </div>

        <div className="images-row">
          <div className="resume-container">
            <img
              className="resume"
              src={resume}
              alt="Gillians Resume"
              onClick={handleZoom}
              style={{ cursor: 'zoom-in' }}
            />
          </div>
          <div className="photo-container">
            <img className="about-photo" src={headshot} alt="Gillians headshot" />
          </div>
        </div>
      </div>

      {isZoomed && (
        <div className="modal-overlay" onClick={closeZoom}>
          <img className="zoomed-resume" src={resume} alt="Zoomed Resume" />
        </div>
      )}
    </section>
  );
}

export default About;
