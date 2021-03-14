import { links } from "./data/links.json";
import "./style/_master.scss";

function App() {
  const githubUserId = 38816229;
  const githubAvatarUrl = `https://avatars.githubusercontent.com/u/${githubUserId}?v=4`;
  return (
    <div className="wrapper">
      <div className="container">
        <div className="header">
          <img src={githubAvatarUrl} alt="Picture of mine" />
          <p id="username">@Thorben</p>
        </div>
        <div className="body">
          {links.map((link, index) => {
            return (
              <a key={index} href={link.target} className="redirect-btn">
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
