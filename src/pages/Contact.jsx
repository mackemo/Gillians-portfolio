import React, { useState } from 'react';


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
        const { name, value } = e.targert;

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
        <section>
            <h3>Contact</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email:</label><br />
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="message">Message:</label><br />
                <input
                    type="text"
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    Send
                </button>
            </form>
        </section>
    )
}

export default Contact;