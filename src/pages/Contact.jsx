import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';


function Contact() {
    // contact form
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    // error messages for empty fields
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    // success message after submission
    const [successMessage, setSuccessMessage] = useState('');

    // set changes of form input
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: '',
        });
    }

    // validating the fields are inputted
    const validateForm = () => {
        let isValid = true;
        let newErrors = { name: '', email: '', message: '' };
    
        if (!form.name) {
          newErrors.name = 'Name is required.';
          isValid = false;
        }

        if (!form.email) {
          newErrors.email = 'Email address is required.';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
          newErrors.email = 'Email address is invalid.';
          isValid = false;
        }

        if (!form.message) {
          newErrors.message = 'Message is required.';
          isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
    };

    // on submit, email draft created with succes message
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        } else {
            const mailtoLink = `mailto:gillianflatt@me.com?subject=Contact from 
            ${form.name}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`)}`;
            window.location.href = mailtoLink;
            setSuccessMessage('Your message has been prepared in your email client!');
        }

        console.log('Form submitted:', form);
        // reset form after submission
        setForm({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
        <section className="contact-section">
            <h3 className="contact-title">
                Contact Me
            </h3>
            <p className="chat">
                    <TypeAnimation
                    sequence={[
                        "I'd love to hear from you, let's chat!",  
                        1000                      
                    ]}
                    wrapper="span"
                    speed={60}
                    repeat={Infinity}              
            /></p>
    
            <div className="contact-container">
                <div className="contact-form-wrapper">
                    <form onSubmit={handleSubmit} noValidate>
                    <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                        />
                        {errors.name && <span className="form-error">{errors.name}</span>}
            
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className="form-error">{errors.email}</span>}
            
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                        />
                        {errors.message && <span className="form-error">{errors.message}</span>}
            
                        <button type="submit" className="home-button">Send</button>
            
                        {successMessage && <p className="success-message">{successMessage}</p>}
                    </form>
                </div>
            </div>
        </section>
        </motion.div>
    );
}

export default Contact;