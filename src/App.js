import { Component } from "react";
import Link from "./components/Link";
import { name, quote, links } from "./data/content.json";
import Me from "./images/me.jpg";
import "./style/_master.scss";

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <img className="me" src={Me} alt="Picture of mine" />
          <h2 className="username">{name}</h2>
          <blockquote>{quote}</blockquote>
          <div className="button-container">
            {links.map((link, index) => {
              return <Link key={index} text={link.name} target={link.target} />;
            })}
          </div>
        </div>
        <a href="mailto:thorben.klein1801@gmail.com" className="contact-btn">
          Kontaktieren
        </a>
      </div>
    );
  }
}
