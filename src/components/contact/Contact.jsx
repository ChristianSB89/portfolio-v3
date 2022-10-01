import React from "react";
import "./contact.css";
import { HiMail } from "react-icons/hi";
import { BsMessenger } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Send meg en</h5>
      <h2>Melding</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <HiMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>christiansandumbreivik@gmail.com</h5>
            <a href="mailto:christiansandumbreivik@gmail.com" target="_blank">
              Send en mail
            </a>
          </article>
          <article className="contact_option">
            <BsMessenger className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Christian Sandum Breivik</h5>
            <a href="https://m.me/ChristianSandumBreivik" target="_blank">
              Send en direktemelding
            </a>
          </article>
          <article className="contact_option">
            <BsDiscord className="contact_option-icon" />
            <h4>Discord</h4>
            <h5>ChristianSB#7845</h5>
            <a
              href="https://discord.com/api/webhooks/1025858038831268010/WdF31mdEnoGgD4OGZ_toTOX8YL6Hu26LlrfV4XivtnhN45cG9_SQIv0rYoocCM_ahmyw"
              target="_blank"
            >
              Send meg en melding på serveren
            </a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="Navn"
            placeholder="Navn og etternavn"
            required
          />
          <input type="email" name="Email" placeholder="Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Skriv din melding"
            required
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
