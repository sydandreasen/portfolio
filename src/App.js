import React, { useState } from "react";
import { Nav } from "./Components/JS/Nav.js";
import { About } from "./Components/JS/About.js";
import { Projects } from "./Components/JS/Projects.js";
import "./Components/SCSS/App.scss";

function App() {
  const defaultPage = "About";
  const [page, setPage] = useState(defaultPage);

  return (
    <div className="app">
      <header>
        <Nav page={page} setPage={(page) => setPage(page)} />
      </header>
      <div className="main-content">
        {page === "About" ? (
          <About />
        ) : page === "Projects" ? (
          <Projects />
        ) : (
          "Error, Page Not Found"
        )}
      </div>
    </div>
  );
}

export default App;
