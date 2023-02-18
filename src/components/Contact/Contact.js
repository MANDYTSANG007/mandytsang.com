import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        alert(`Thank you for your message.`)
        emailjs.sendForm("process.env.REACT_APP_SERVICE_ID","process.env.REACT_APP_TEMPLATE_ID", form.current,"process.env.REACT_APP_P_KEY")
        e.target.reset();
    }

    return (
        <main className="contact">
            <h1 className="contact-title"> Contact Me </h1>
            <div className="contact-container">
                <form className="form" ref={form} onSubmit={sendEmail}>
                    <input className="border-box" type="text" name="name" placeholder="Your name (required)" required />
                    <input className="border-box" type="email" name="email" placeholder="Your Email (required)" required />
                    <textarea className="border-box" name="message" rows="8" placeholder="Your message (required)" required />
                    <button type="submit" className="contact-button"> Send </button>
                </form>
            </div>
        </main>
    )
}
export default Contact;