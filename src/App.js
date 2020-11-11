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
import {
  fadeInLeft,
  fadeInRight,
  fadeInDown,
  fadeInUp,
  fadeIn,
  pulse,
} from "react-animations";
import Radium, { StyleRoot } from "radium";

function App() {
  const [page, setPage] = useState("About");

  // setup animation styles
  const animations = {
    fadeInLeft: {
      animation: "1s",
      animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
    },
    fadeInRight: {
      animation: "1s",
      animationName: Radium.keyframes(fadeInRight, "fadeInRight"),
    },
    fadeIn: {
      animation: "1s",
      animationName: Radium.keyframes(fadeIn, "fadeIn"),
    },
    fadeInDown: {
      animation: "1s",
      animationName: Radium.keyframes(fadeInDown, "fadeInDown"),
    },
    fadeInUp: {
      animation: "1s",
      animationName: Radium.keyframes(fadeInUp, "fadeInUp"),
    },
    pulse: {
      animationDelay: "0.7s",
      animation: "1s",
      animationName: Radium.keyframes(pulse, "pulse"),
    },
  };

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
        <StyleRoot>
          <div style={animations.fadeInUp} className="row">
            <h5>Sydney Andreasen</h5>
            <IconButton
              onClick={() =>
                window.open("https://www.linkedin.com/in/sydney-a/")
              }
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
        </StyleRoot>
      </footer>
    </div>
  );
}

export default App;
