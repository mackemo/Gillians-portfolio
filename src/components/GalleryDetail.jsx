import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import td1 from '../assets/images/gallery-images/td1.png'
import td2 from '../assets/images/gallery-images/td2.png'
import td3 from '../assets/images/gallery-images/td3.png'
import td4 from '../assets/images/gallery-images/td4.png'
import td5 from '../assets/images/gallery-images/td5.png'
import td6 from '../assets/images/gallery-images/td6.png'
import td7 from '../assets/images/gallery-images/td7.png'
import td8 from '../assets/images/gallery-images/td8.png'
import td9 from '../assets/images/gallery-images/td9.png'
import td10 from '../assets/images/gallery-images/td10.png'
import td11 from '../assets/images/gallery-images/td11.png'
import td12 from '../assets/images/gallery-images/td12.png'
import td13 from '../assets/images/gallery-images/td13.png'
import td14 from '../assets/images/gallery-images/td14.png'
import td15 from '../assets/images/gallery-images/td15.png'
import td16 from '../assets/images/gallery-images/td16.png'
import td17 from '../assets/images/gallery-images/td17.png'
import td18 from '../assets/images/gallery-images/td18.png'
import td19 from '../assets/images/gallery-images/td19.png'
import td20 from '../assets/images/gallery-images/td20.png'
import td21 from '../assets/images/gallery-images/td21.png'
import td22 from '../assets/images/gallery-images/td22.png'
import td23 from '../assets/images/gallery-images/td23.png'
import td24 from '../assets/images/gallery-images/td24.png'
import td25 from '../assets/images/gallery-images/td25.png'
import td26 from '../assets/images/gallery-images/td26.png'
import td27 from '../assets/images/gallery-images/td27.png'
import td28 from '../assets/images/gallery-images/td28.png'
import td29 from '../assets/images/gallery-images/td29.png'
import td30 from '../assets/images/gallery-images/td30.png'
import td31 from '../assets/images/gallery-images/td31.png'
import td32 from '../assets/images/gallery-images/td32.png'

import rg1 from '../assets/images/gallery-images/rg1.png'
import rg2 from '../assets/images/gallery-images/rg2.png'
import rg3 from '../assets/images/gallery-images/rg3.png'
import rg4 from '../assets/images/gallery-images/rg4.png'
import rg5 from '../assets/images/gallery-images/rg5.png'
import rg6 from '../assets/images/gallery-images/rg6.png'
import rg7 from '../assets/images/gallery-images/rg7.png'
import rg8 from '../assets/images/gallery-images/rg8.png'
import rg9 from '../assets/images/gallery-images/rg9.png'
import rg10 from '../assets/images/gallery-images/rg10.png'
import rg11 from '../assets/images/gallery-images/rg11.png'
import rg12 from '../assets/images/gallery-images/rg12.png'
import rg13 from '../assets/images/gallery-images/rg13.png'
import rg14 from '../assets/images/gallery-images/rg14.png'
import rg15 from '../assets/images/gallery-images/rg15.png'

const galleryData = {
    'they-dont-pay': {
        title: "They Don't Pay? We Won't Pay!",
        role: "Role: Antonia",
        date: "Date: October 2024",
        location: "Butler University Mainstage",
        directors: "Directors: Jos Houben, Emily Wilson",
        costumes: "Costume Designer: Wendy Meaden",
        scenes: "Scenic Designer: Rob Koharchik",
        lighting: "Lighting Designer: Cathy Snipe",
        photos: "Photos: Zach Rosing",
        img: [td1, td2, td3, td4, td5, td6, td7, td8, td9, td10, td11, td12, td13, td14, td15, td16, td17, td18, td19, td20, td21, td22, td23, td24, td25, td26, td27, td28, td29, td30, td31, td32]
    },

    'radium-girls': {
        title: "Radium Girls",
        role: "Role: Miss Wiley",
        date: "Date: February 2024",
        location: "Butler University Mainstage",
        directors: "Director: Constance Macy",
        costumes: "Costume Designer: Guy Clark",
        scenes: "Scenic Designer: Rob Koharchik",
        lighting: "Lighting Designer: Ryan Koharchik",
        photos: "Photos: Zach Rosing",
        img: [rg1, rg2, rg3, rg4, rg5, rg6, rg7, rg8, rg9, rg10, rg11, rg12, rg13, rg14, rg15]
    },

    'men-on-boats': {
        title: "Men On Boats",
        role: "Role: Antonia",
        date: "Date: October 2024",
        location: "Butler University Mainstage",
        directors: "Directors: Jos Houben, Emily Wilson",
        costumes: "Costume Designer: Wendy Meaden",
        scenes: "Scenic Designer: Rob Koharchik",
        lighting: "Lighting Designer: Cathy Snipe",
        photos: "Photos: Zach Rosing",
        img: []
    },

    'about-love': {
        title: "About Love",
        role: "Role: Antonia",
        date: "Date: October 2024",
        location: "Butler University Mainstage",
        directors: "Directors: Jos Houben, Emily Wilson",
        costumes: "Costume Designer: Wendy Meaden",
        scenes: "Scenic Designer: Rob Koharchik",
        lighting: "Lighting Designer: Cathy Snipe",
        photos: "Photos: Zach Rosing",
        img: []
    },

    'specific-costume': {
        title: "Specific Costume Work",
        role: "Role: Antonia",
        date: "Date: October 2024",
        location: "Butler University Mainstage",
        directors: "Directors: Jos Houben, Emily Wilson",
        costumes: "Costume Designer: Wendy Meaden",
        scenes: "Scenic Designer: Rob Koharchik",
        lighting: "Lighting Designer: Cathy Snipe",
        photos: "Photos: Zach Rosing",
        img: []
    },

    'wonderland': {
        title: "Wonderland",
        role: "Role: Antonia",
        date: "Date: October 2024",
        location: "Butler University Mainstage",
        directors: "Directors: Jos Houben, Emily Wilson",
        costumes: "Costume Designer: Wendy Meaden",
        scenes: "Scenic Designer: Rob Koharchik",
        lighting: "Lighting Designer: Cathy Snipe",
        photos: "Photos: Zach Rosing",
        img: []
    },
};

function GalleryDetail() {
    const { slug } = useParams();
    const item = galleryData[slug];

    if (!item) {
        return <p>Gallery item not found.</p>;
    }

    return (
        <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                >
            
            <section className="gallery-detail">
                <h1>{item.title}</h1>
                <div className='gallery-info'>
                    <div className='left-info'>
                        <p>{item.role}</p>
                        <p>{item.date}</p>
                    </div>
                    <div className='right-info'>
                        <p>{item.location}</p>
                        <p>{item.directors}</p>
                        <p>{item.costumes}</p>
                        <p>{item.scenes}</p>
                        <p>{item.lighting}</p>
                        <p>{item.photos}</p>
                    </div>
                </div>
                <div className='gallery-images-container'>
                    {item.img.map((src, idx) => (
                        <img className="gallery-images" key={idx} src={src} alt={`${item.title} ${idx + 1}`} />
                    ))}
                </div>
            </section>

        </motion.div>
    );
}

export default GalleryDetail;
