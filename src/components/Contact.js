import Loader from "react-loaders";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_c10fj8c",
                "template_kyl71ph",
                form.current,
                "qm-Ykn826rEvM0XWv"
            )
            .then(
                () => {
                    alert("Message successfully sent!");
                    window.location.reload(false);
                },
                () => {
                    alert("Failed to send the message, please try again");
                }
            );
    };

    return (
        <section className="contact" id = "contact">
            <div className="container contact-page">
                <div className="text-zone">
                    <h2>Contact me!</h2>
                    <p>
                        I am interested in freelance opportunities - especially
                        ambitious or large projects. However, if you have other
                        request or question, don't hesitate to contact me using
                        below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input
                                        placeholder="Name"
                                        type="text"
                                        name="name"
                                        required
                                    />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    > 
                                    </textarea>
                                </li>
                                <li>
                                    <input
                                        type="submit"
                                        className="flat-button"
                                        value="SEND"
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

            </div>
            <Loader type="pacman" />
            </section>
    );
};

export default Contact;
