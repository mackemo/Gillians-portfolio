import React from 'react';
import { useParams } from 'react-router-dom';

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
        img: []
    },

    'radium-girls': {
        title: "Radium Girls",
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
        <section className="gallery-detail">
            <h1>{item.title}</h1>
            <div className='gallery-info'>
                <div>
                    <p>{item.role}</p>
                    <p>{item.date}</p>
                </div>
                <div>
                    <p>{item.location}</p>
                    <p>{item.directors}</p>
                    <p>{item.costumes}</p>
                    <p>{item.scenes}</p>
                    <p>{item.lighting}</p>
                    <p>{item.photos}</p>
                </div>
            </div>
            <div className="gallery-images">
                {item.img.map((src, idx) => (
                    <img key={idx} src={src} alt={`${item.title} ${idx + 1}`} />
                ))}
            </div>
        </section>
    );
}

export default GalleryDetail;
