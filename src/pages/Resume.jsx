import React, { useState, useEffect } from 'react';
import resume from '../assets/images/resume.png';
import { motion } from 'framer-motion';

function Resume() {
  return (
    <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            >
        
        <section className='resume-section'>
            <div className="resume-container">
                <a href={resume} download="Gillian_Resume.png">
                    <img
                    className="resume"
                    src={resume}
                    alt="Gillian's Resume"
                    title="Click to download"
                    style={{ cursor: 'pointer' }}
                    />
                </a>
            </div>
        </section>
            
    </motion.div>
  );
}

export default Resume;
