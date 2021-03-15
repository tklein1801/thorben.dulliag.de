import { links } from "./data/links.json";
import me from "./images/me.jpg";
import Link from "./components/Link";
import "./style/_master.scss";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="header">
          <img src={me} alt="Picture of mine" />
          <p id="username">@Thorben</p>
        </div>
        <div className="body">
          {links.map((link, index) => {
            return <Link key={index} text={link.name} target={link.target} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
