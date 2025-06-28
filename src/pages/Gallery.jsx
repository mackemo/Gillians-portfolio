import React from 'react';
import { Link } from 'react-router-dom';
import theydont from '../assets/images/theydont.png';
import radium from '../assets/images/radium.png';
import men from '../assets/images/men.png';
import love from '../assets/images/love.png';
import costume from '../assets/images/costume.png';
import wonderland from '../assets/images/wonderland.png';


function Gallery() {
    return (
        <section>
            <h3 className="gallery-title">Gallery</h3>
            <div className='gallery-section'>
                
            <div className="gallery">
                <Link to="/gallery/they-dont-pay">
                    <img src={theydont} alt="They Don't Pay? We Won't Pay!" />
                    <div className="info">
                        <h5>They Don't Pay? We Won't Pay!</h5>
                    </div>
                </Link>
            </div>

            <div className="gallery">
                <Link to="/gallery/radium-girls">
                    <img src={radium} alt="Radium Girls" />
                    <div className="info">
                        <h5>Radium Girls!</h5>
                    </div>
                </Link>
            </div>

            <div className="gallery">
                <Link to="/gallery/men-on-boats">
                    <img src={men} alt="Men On Boats" />
                    <div className="info">
                        <h5>Men On Boats</h5>
                    </div>
                </Link>
            </div>

            <div className="gallery">
                <Link to="/gallery/about-love">
                    <img src={love} alt="About Love" />
                    <div className="info">
                        <h5>About Love</h5>
                    </div>
                </Link>
            </div>

            <div className="gallery">
                <Link to="/gallery/specific-costume">
                    <img src={costume} alt="Specific Costume Work" />
                    <div className="info">
                        <h5>Specific Costume Work</h5>
                    </div>
                </Link>
            </div>

            <div className="gallery">
                <Link to="/gallery/wonderland">
                    <img src={wonderland} alt="Wonderland" />
                    <div className="info">
                        <h5>Wonderland</h5>
                    </div>
                </Link>
            </div>

               
            </div>
        </section>
    )
}

export default Gallery;