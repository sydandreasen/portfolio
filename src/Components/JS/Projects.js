import React from "react";
import { Project } from "./Project.js";
// import action icons
import GitHubIcon from "@material-ui/icons/GitHub";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

// import all tech stack images
import react from "../../Images/Tech/react.png";
import js from "../../Images/Tech/js.png";
import css from "../../Images/Tech/css.png";
import html from "../../Images/Tech/html.png";

// import all demo images
import mp1 from "../../Images/DemoPics/MealPlanner/mealplanner-1.png";
import rps1 from "../../Images/DemoPics/RPS/RPS-1.png";

export const Projects = (props) => {
  const projects = [
    {
      title: "Meal Planner",
      description: "plan meals in daily, weekly, or monthly perspective",
      images: [
        // import images at top and put variable names in here
        mp1,
      ],
      stack: [
        { img: react, title: "React" },
        { img: js, title: "JS" },
        { img: css, title: "CSS" },
      ], // TODO : also add firebase and edamam and nosql
      links: [
        // import any components at top and put variable names in here
        {
          icon: <GitHubIcon />,
          title: "Go to GitHub Page",
          link: () =>
            window.open("https://github.com/sydandreasen/meal-planner"),
        },
        {
          icon: <PlayCircleOutlineIcon />,
          title: "Watch a Demo Video",
          link: () => console.log("opening demo video"), // embed on page in a modal style; TODO: make demo video
        },
        {
          icon: <OpenInNewIcon />,
          title: "Open Live Site",
          link: () => window.open("https://mealplanner-b8cf1.web.app"),
        },
        {
          icon: <KeyboardArrowRightIcon />,
          title: "See More Info",
          link: () => console.log("flip to back side to see info"), // TODO : back of card
        },
      ],
      info:
        "Framework: React.js; Top Library Used: Ant Design; API : Edamam...",
    },
    {
      title: "Rock Paper Scissors",
      description: "play RPS and see current stats by play choice",
      images: [
        // import images at top and put variable names in here
        rps1,
      ],
      stack: [
        { img: html, title: "HTML5" },
        { img: js, title: "JS" },
        { img: css, title: "CSS" },
      ],
      links: [
        // import any components at top and put variable names in here
        {
          icon: <GitHubIcon />,
          title: "Go to GitHub Page",
          link: () =>
            window.open("https://github.com/sydandreasen/Rock-Paper-Scissors"),
        },
        {
          icon: <PlayCircleOutlineIcon />,
          title: "Watch a Demo Video",
          link: () => console.log("opening demo video"), // embed on page in a modal style; TODO: make demo video
        },
        {
          icon: <OpenInNewIcon />,
          title: "Open Live Site",
          link: () =>
            window.open("https://sydandreasen.github.io/Rock-Paper-Scissors/"),
        },
        {
          icon: <KeyboardArrowRightIcon />,
          title: "See More Info",
          link: () => console.log("flip to back side to see info"), // TODO : back of card
        },
      ],
      info: "...",
    },
  ];

  return (
    <div className="page">
      <div className="row">
        <h1>Projects</h1>
      </div>
      <br />
      <div className="row">
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};
