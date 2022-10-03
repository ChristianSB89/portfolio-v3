import React from "react";
import "./portfolio.css";
import Dolingen from "../../assets/dolingen_thumb.png";
import Map from "../../assets/map.png";
import NavApp from "../../assets/nav-app.png";
import DrumKit from "../../assets/drumkit.png";
import PortfolioImg from "../../assets/portfolio.png";
import ToDo from "../../assets/to-doList.png";
import Minecraft from "../../assets/minecraft-clone.png";

const data = [
  {
    id: 1,
    image: Dolingen,
    title: "Fiktiv nettavis",
    github: "https://github.com/ChristianSB89/Dolingen",
    btn: "GitHub",
    demo: "https://christiansb89.github.io/Dolingen/",
    btnPrimary: "Demo",
  },
  {
    id: 2,
    image: Map,
    title: "Kart API prosjekt",
    github: "https://github.com/ChristianSB89/Map-Test",
    btn: "GitHub",
    demo: "https://christiansb89.github.io/Map-Test/",
    btnPrimary: "Demo",
  },
  {
    id: 3,
    image: NavApp,
    title: "Nav App design i Figma",
    github: "figma.com/@ChristianSB",
    btn: "Figma",
    demo: "https://www.figma.com/file/o0Kyv62TbP5EhmOE9XqAo0/NAV-app?node-id=0%3A1",
    btnPrimary: "Demo",
  },
  {
    id: 4,
    image: DrumKit,
    title: "Trommer med JavaScript",
    github: "https://github.com/ChristianSB89/drumkit-javascript",
    btn: "GitHub",
    demo: "https://christiansb89.github.io/drumkit-javascript/",
    btnPrimary: "Demo",
  },
  {
    id: 5,
    image: PortfolioImg,
    title: "Tdilig utkast av portefølje design",
    github: "figma.com/@ChristianSB",
    btn: "Figma",
    demo: "https://www.figma.com/file/hnixYAjWAbIXgdrQr3vE79/portfolio-wireframe?node-id=72%3A680",
    btnPrimary: "Demo",
  },
  {
    id: 6,
    image: ToDo,
    title: "Huskeliste i JavaScript",
    github: "https://github.com/ChristianSB89/todo-list",
    btn: "GitHub",
    demo: "https://christiansb89.github.io/todo-list/",
    btnPrimary: "Demo",
  },
  {
    id: 7,
    image: Minecraft,
    title: "Minecraft-klone (Work in progress)",
    github: "https://github.com/ChristianSB89/minecraft-clone",
    btn: "GitHub",
    demo: "https://christiansb89.github.io/minecraft-clone/",
    btnPrimary: "Demo",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mine prosjekter</h5>
      <h2>Portefølje</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo, btn, btnPrimary }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  {btn}
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  {btnPrimary}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
