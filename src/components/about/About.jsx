import React from "react";
import "./about.css";
import HeadShot from "../../assets/headshot.png";
import { FaGraduationCap } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Finn ut mer</h5>
      <h2>Om meg</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={HeadShot} alt="" className="headshot-img" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaGraduationCap className="about_icon" />
              <h5>Erfaring</h5>
              <small>
                10+ år med grafisk design <br />
                Front end siden april 2022
              </small>
            </article>
            <article className="about_card">
              <FaUsers className="about_icon" />
              <h5>Grafisk Design</h5>
              <small>40+ fullførte prosjekter</small>
            </article>
            <article className="about_card">
              <FaFolderOpen className="about_icon" />
              <h5>Front End Prosjekter</h5>
              <small>20+ fullførte prosjekter</small>
            </article>
          </div>

          <p>
            PC entusiast og tech nerd. Jeg har alltid vært nysgjerrig på koding
            og har prøvd meg litt i Python. Etter mange timer med modifisering
            av spill og feilsøking i konsoll så fant jeg ut at det var koding
            jeg ville gjøre. Under beltet har jeg kunnskap om HTML, CSS,
            JavaScript, React, Photoshop, Illustrator, Blender og Figma.
          </p>
          <p>
            Har vært gamer siden Super Nintendo kom til Norge i 1992. Jeg har
            vært borti mange konsoller og ble tidlig PC-gamer. Denne hobbyen har
            fulgt meg hele livet.
          </p>
          <p>
            Er også veldig glad i grafisk design og har noe utdanning innen
            faget. Jobber også en del med 3D modellering, tegner, animerer og
            lager video grafikk. Jeg har blant annet laget logoer til band og
            gamere. En annen ting som har fulgt meg gjennom livet er musikk. Jeg
            er trommeslager og lager musikk på PC med diverse programvarer.
          </p>

          <a href="#contact" className="btn btn-primary">
            Send meg en melding
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
