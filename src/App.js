import { Component } from "react";
import Link from "./components/Link";
import { links } from "./data/links.json";
import Me from "./images/me.jpg";
import "./style/_master.scss";

export default class App extends Component {
  constructor() {
    super();
    this.state = { username: "thorben.klein", followers: 0, follows: 0 };
  }

  async getInstagramProfile() {
    const { username } = this.state;
    var response = await fetch(`https://www.instagram.com/${username}/?__a=1`);
    var data = await response.json();
    return data;
  }

  async componentDidMount() {
    // var instagramResponse = await this.getInstagramProfile();
    // followers => edge_followed_by.count
    // follows => edge_follow.count
    // this.setState({
    //   followers: instagramResponse.edge_followed_by.count,
    //   follows: instagramResponse.edge_follow.count,
    // });
  }

  render() {
    const { followers, follows } = this.state;
    return (
      <div className="wrapper">
        <div className="container">
          <img className="me" src={Me} alt="Image of mine" />
          <h2 className="username">Thorben Klein</h2>

          {/* <div className="follower-container">
            <div className="follower">
              <p className="label">Followers</p>
              <p className="count">{followers}</p>
            </div>
            <div className="follows">
              <p className="label">Follows</p>
              <p className="count">{follows}</p>
            </div>
          </div> */}

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
