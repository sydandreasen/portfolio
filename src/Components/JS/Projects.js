import React from "react";
import { Project } from "./Project.js";

// import animations
import {
  fadeInLeft,
  fadeInRight,
  fadeInDown,
  fadeInUp,
  fadeIn,
  pulse,
} from "react-animations";
import Radium, { StyleRoot } from "radium";

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
import firebase from "../../Images/Tech/firebase.png";
import nosql from "../../Images/Tech/nosql.png";
import edamam from "../../Images/Tech/edamam.png";

// import all demo images
import mp1 from "../../Images/DemoPics/MealPlanner/mealplanner-1.png";
import rps1 from "../../Images/DemoPics/RPS/RPS-1.png";
import oph from "../../Images/DemoPics/OldPortfolio/oldPortfolio_home.png";

export const Projects = (props) => {
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
      animation: "1.4s",
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
      animationDelay: "0.3s",
      animation: "1s",
      animationName: Radium.keyframes(pulse, "pulse"),
    },
  };

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
        { img: firebase, title: "Firebase" },
        { img: nosql, title: "NoSQL" },
        { img: edamam, title: "Edamam API" },
      ],
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
    {
      title: "Original Portfolio",
      description:
        "link to first projects and read about internship and research",
      images: [
        // import images at top and put variable names in here
        oph,
      ],
      stack: [
        { img: html, title: "HTML5" },
        { img: css, title: "CSS" },
        { img: js, title: "JS" },
      ],
      links: [
        // import any components at top and put variable names in here
        {
          icon: <GitHubIcon />,
          title: "Go to GitHub Page",
          link: () => window.open("https://github.com/sydandreasen/Portfolio"),
        },
        {
          icon: <PlayCircleOutlineIcon />,
          title: "Watch a Demo Video",
          link: () => console.log("opening demo video"), // embed on page in a modal style; TODO: make demo video
        },
        {
          icon: <OpenInNewIcon />,
          title: "Open Live Site",
          link: () => window.open("https://sydandreasen.github.io/Portfolio/"),
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
      <StyleRoot>
        <div className="row" style={animations.fadeIn}>
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </StyleRoot>
    </div>
  );
};
