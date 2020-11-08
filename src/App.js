import React, { useState } from "react";
import { Nav } from "./Components/JS/Nav.js";
import { About } from "./Components/JS/About.js";
import { Projects } from "./Components/JS/Projects.js";
import { Contact } from "./Components/JS/Contact.js";
import "./Components/SCSS/App.scss";

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
    </div>
  );
}

export default App;
