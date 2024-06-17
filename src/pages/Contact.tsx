import { FormEvent } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm('service_if', 'template_id', e.target as HTMLFormElement, 'public_key');
    }

    return (
        <>
        <h1 className="contact-h1">Contact Our Team</h1>
            <div className="contact-container">
                <div className="contact-inner">
                    <form onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="email" className="input-form-name" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter name:" />
                        <label>Email address</label>
                        <input type="email" className="input-form-email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email:" />
                        <label>Message</label>
                        <textarea className="input-form-message" id="exampleInputMessage" placeholder="Message:" />
                        <button type="submit" className="contact-button">Submit</button>
                    </form>
                </div>
            </div>
        </>

    );

}

export default Contact
