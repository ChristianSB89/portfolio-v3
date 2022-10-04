import React, { useRef } from "react";
import "./contact.css";
import { BsMessenger } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_54tl038",
      "template_t3s6rnt",
      form.current,
      "Ijx7pH-NbemkNa_ok"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Send meg en</h5>
      <h2>Melding</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option twitter">
            <FaTwitterSquare className="contact_option-icon" />
            <h4>Twitter</h4>
            <a
              href="https://twitter.com/messages/compose?recipient_id=@ChrisSanBrei"
              class="twitter-dm-button"
              data-screen-name="@ChrisSanBrei"
              target="_blank"
            >
              @ChrisSanBrei
            </a>
          </article>
          <article className="contact_option messenger">
            <BsMessenger className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Christian Sandum Breivik</h5>
            <a href="https://m.me/ChristianSandumBreivik" target="_blank">
              Send en direktemelding
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="Navn"
            placeholder="Navn og etternavn"
            required
            className="name-box"
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            required
            className="email-box"
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Skriv din melding"
            required
            className="message-box"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send melding
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
