import React from "react";
import "./about.css";
import HeadShot from "../../assets/headshot.png";
import { FaGraduationCap } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={HeadShot} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaGraduationCap className="about_icon" />
              <h5>Experience</h5>
              <small>10+ years graphic design 1+ year front end</small>
            </article>
            <article className="about_card">
              <FaUsers className="about_icon" />
              <h5>Clients</h5>
              <small>5+ locally</small>
            </article>
            <article className="about_card">
              <FaFolderOpen className="about_icon" />
              <h5>Projects</h5>
              <small>20+ completed projects</small>
            </article>
          </div>

          <p>
            Heisann, jeg er PC entusiast og tech nerd. Under belte har jeg
            kunnskap om HTML, CSS, JavaScript, React, Photoshop, Illustrator,
            Blender og Figma. Jeg har alltid vært nysgjerrig på koding og har
            prøvd meg litt i Python. Etter mange timer med modifisering av spill
            og feilsøking i konsoll så fant jeg ut at det var koding jeg ville
            gjøre. Har vært gamer siden Super Nintendo kom til Norge i 1992. Jeg
            har vært borti mange konsoller og ble tidlig PC-gamer. Denne hobbyen
            har fulgt meg hele livet. Er også veldig glad i grafisk design og
            har noe utdanning innen faget. Jobber også en del med 3D
            modellering, tegner, animerer og lager video grafikk. Jeg har blant
            annet laget logoer til band og gamere. En annen ting som har fulgt
            meg gjennom livet er musikk. Jeg er trommeslager og lager musikk på
            PC med diverse programvarer.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
