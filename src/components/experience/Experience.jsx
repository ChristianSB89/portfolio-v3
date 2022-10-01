import React from "react";
import "./experience.css";
import { BsCheckSquareFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsCheckSquareFill className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermeditate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsCheckSquareFill className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermeditate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsCheckSquareFill className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsCheckSquareFill className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsCheckSquareFill className="experience_details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsCheckSquareFill className="experience_details-icon" />
              <div>
                <h4>GitHub</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience_graphic">
          <h3>Graphic Design</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsCheckSquareFill className="experience_details-icon" />
              <div>
                <h4>Affinity Photo</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsCheckSquareFill className="experience_details-icon" />
              <div>
                <h4>Affinity Designer</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsCheckSquareFill className="experience_details-icon" />
              <div>
                <h4>Figma</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsCheckSquareFill className="experience_details-icon" />
              <div>
                <h4>Blender</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsCheckSquareFill className="experience_details-icon" />
              <div>
                <h4>DaVinci Resolve</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
