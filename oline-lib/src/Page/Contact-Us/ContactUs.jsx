import { useState } from "react";
import "./ContactUs.css";

export default function ContactUs() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        // Réinitialiser les champs après 2 secondes
        setTimeout(() => {
            setFormData({ name: "", subject: "", email: "", message: "" });
            setSubmitted(false);
        }, 2000);
    };

    return (
        <div className="contact">
            <div className="contact-wrapper">
                <div className="contact-item">
                    <div className="contact-item-icon">
                        <i className="bi bi-telephone"></i>
                        
                    </div>
                    <p className="contact-item-text">+216 99 999 999</p>
                </div>
                <div className="contact-item">
                    <div className="contact-item-icon">
                        <i className="bi bi-envelope"></i>
                       
                    </div>
                    <p className="contact-item-text">onlinelib@onlinelib.com</p>
                </div>
                <div className="contact-item">
                    <div className="contact-item-icon">
                        <i className="bi bi-geo-alt"></i>
                        
                    </div>
                    <p className="contact-item-text">Tunis, Ariana - Borlouzir St</p>
                </div>
            </div>
            <form className="contact-us-form" onSubmit={handleSubmit}>
                <h1 className="contact-us-form-title">Contact Us</h1>
                <div className="contact-us-form-wrapper">
                    <input
                        type="text"
                        name="name"
                        placeholder="Votre Nom"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Sujet"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <textarea
                    name="message"
                    placeholder="Votre message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                {submitted ? (
                    <p className="verified-message">✔ Vérifié</p>
                ) : (
                    <button type="submit">Envoyer</button>
                )}
            </form>
        </div>
    );
}
