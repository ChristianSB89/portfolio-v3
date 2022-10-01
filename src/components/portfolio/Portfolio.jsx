import React from "react";
import "./portfolio.css";
import Dolingen from "../../assets/dolingen_thumb.png";
import Map from "../../assets/map.png";
import NavApp from "../../assets/nav-app.png";
import DrumKit from "../../assets/drumkit.png";
import PortfolioImg from "../../assets/portfolio.png";
import ToDo from "../../assets/to-doList.png";
import Minecraft from "../../assets/minecraft-clone.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Dolingen} alt="" />
          </div>
          <h3>Fictional Newspaper</h3>
          <div className="portfolio_item-cta" v>
            <a href="" className="btn" target="_blank">
              GitHub
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Map} alt="" />
          </div>
          <h3>Map API</h3>
          <div className="portfolio_item-cta" v>
            <a href="" className="btn" target="_blank">
              GitHub
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={NavApp} alt="" />
          </div>
          <h3>Nav App design in Figma</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn" target="_blank">
              GitHub
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={DrumKit} alt="" />
          </div>
          <h3>Drums with JavaScript</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn" target="_blank">
              GitHub
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={PortfolioImg} alt="" />
          </div>
          <h3>Design for my first portfolio</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn" target="_blank">
              GitHub
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={ToDo} alt="" />
          </div>
          <h3>To Do List</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn" target="_blank">
              GitHub
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Minecraft} alt="" />
          </div>
          <h3>Minecraft Clone (Work In Progress)</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn" target="_blank">
              GitHub
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
