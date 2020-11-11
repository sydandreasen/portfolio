import React, { useState } from "react";
import { Nav } from "./Components/JS/Nav.js";
import { About } from "./Components/JS/About.js";
import { Projects } from "./Components/JS/Projects.js";
import { Contact } from "./Components/JS/Contact.js";
import "./Components/SCSS/App.scss";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";

function App() {
  const [page, setPage] = useState("About");

  return (
    <div className="App">
      <header className="App-header">
        <Nav page={page} setPage={(page) => setPage(page)} />
      </header>
      <div className="main-content">
        {page === "About" ? (
          <About />
        ) : page === "Projects" ? (
          <Projects />
        ) : page === "Contact" ? (
          <Contact />
        ) : (
          "Error, Page Not Found"
        )}
      </div>
      <footer>
        <div className="row">
          <h5>Sydney Andreasen</h5>
          <IconButton
            onClick={() => window.open("https://www.linkedin.com/in/sydney-a/")}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open("https://www.facebook.com/sydney.andreasen/")
            }
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            onClick={() => window.open("https://twitter.com/andreasensydney")}
          >
            <TwitterIcon />
          </IconButton>
        </div>
      </footer>
    </div>
  );
}

export default App;
