import React, { useEffect, useState } from "react";
import { Project } from "./Project.js";
import CardContent from "@material-ui/core/CardContent";
import Modal from "@material-ui/core/Modal";

// import animations
import { fadeIn } from "react-animations";
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
import rps2 from "../../Images/DemoPics/RPS/RPS-2.png";
import rps3 from "../../Images/DemoPics/RPS/RPS-3.png";
import oph from "../../Images/DemoPics/OldPortfolio/oldPortfolio_home.png";
import opa from "../../Images/DemoPics/OldPortfolio/oldPortfolio_about.png";
import opp from "../../Images/DemoPics/OldPortfolio/oldPortfolio_projects.png";
import opi from "../../Images/DemoPics/OldPortfolio/oldPortfolio_internship.png";
import opr from "../../Images/DemoPics/OldPortfolio/oldPortfolio_research.png";

// import demo videos
import rockPaperScissors_1 from "../../Demos/RPS-1.mov";

export const Projects = (props) => {
  // show a single demo modal and which modal
  const [showDemo, setShowDemo] = useState({ show: false, which: [] });
  const [demoVid, setDemoVid] = useState(<p>no video</p>);
  // set the content of the modal
  useEffect(
    () =>
      setDemoVid(
        <div>
          <video width="100%" controls>
            {showDemo.which.map((video, index) => (
              <source src={video} key={index} />
            ))}
            Your browser does not support the video tag.
          </video>
        </div>
      ),
    [showDemo]
  );

  // setup animation styles
  const animations = {
    fadeIn: {
      animation: "2s",
      animationName: Radium.keyframes(fadeIn, "fadeIn"),
    },
  };

  const projects = [
    {
      title: "Meal Planner",
      description: "plan meals in daily, weekly, or monthly perspective",
      images: [
        // TODO : import images at top and put variable names in here
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
          link: () => setShowDemo({ show: true, which: [] }), // embed on page in a modal style; TODO: make demo video
        },
        {
          icon: <OpenInNewIcon />,
          title: "Open Live Site",
          link: () => window.open("https://mealplanner-b8cf1.web.app"),
        },
        {
          icon: <KeyboardArrowRightIcon />,
          title: "See More Info",
        },
      ],
      back: (
        <CardContent>
          <h3>Meal Planner</h3>
          <br />
          <h4>Stack</h4>
          <ul>
            <li>React.js, JS, SCSS</li>
            <li>Ant Design Library - building blocks for various components</li>
            <li>
              Edamam API - free subscription - search foods with natural
              language and find nutrition information
            </li>
            <li>
              Google Firebase - hosting, authentication, NoSQL real-time
              database
            </li>
          </ul>
          <br />
          <h4>Basic Features</h4>
          <ul>
            <li>Plan foods in monthly, weekly, or daily view</li>
            <li>Compare daily plans to daily nutritional goals</li>
            <li>Personalize meal settings and nutritional goal settings</li>
            <li>
              Plus so many features I'd love to add with a paid API subscription
              (check the GitHub README for more on this!)
            </li>
          </ul>
        </CardContent>
      ),
    },
    {
      title: "Rock Paper Scissors",
      description: "play RPS and see current stats by play choice",
      images: [rps1, rps2, rps3],
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
          link: () => setShowDemo({ show: true, which: [rockPaperScissors_1] }), // embed on page in a modal style; TODO: make demo video
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
        },
      ],
      back: (
        <CardContent>
          <h3>Rock Paper Scissors</h3>
          <br />
          <h4>Stack</h4>
          <ul>
            <li>HTML - the content</li>
            <li>JS - DOM manipulation according to score</li>
            <li>CSS - styling and animation</li>
          </ul>
          <br />
          <h4>Basic Features</h4>
          <ul>
            <li>Play RPS against computer (random number generator)</li>
            <li>See score change over multiple plays</li>
            <li>
              See live stats that adjust according to how well you perform for
              each choice: rock, paper, and scissors
            </li>
          </ul>
        </CardContent>
      ),
    },
    {
      title: "Original Portfolio",
      description:
        "link to first projects and read about internship and research",
      images: [
        // import images at top and put variable names in here
        oph,
        opa,
        opp,
        opi,
        opr,
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
          icon: <OpenInNewIcon />,
          title: "Open Live Site",
          link: () => window.open("https://sydandreasen.github.io/Portfolio/"),
        },
        {
          icon: <KeyboardArrowRightIcon />,
          title: "See More Info",
        },
      ],
      back: (
        <CardContent>
          <h3>Original Portfolio</h3>
          <br />
          <h4>Stack</h4>
          <ul>
            <li>HTML - the content</li>
            <li>JS - animations via ScrollMagic</li>
            <li>CSS - styling and animation</li>
          </ul>
          <br />
          <h4>Basic Features</h4>
          <ul>
            <li>Resume Download</li>
            <li>About Me</li>
            <li>Contact Info</li>
            <li>Project Descriptions and Links</li>
            <li>Recap of PayPal Internship</li>
            <li>Summaries of Biomechanics Research</li>
          </ul>
        </CardContent>
      ),
    },
  ];

  return (
    <div className="page">
      <div className="row">
        <h1>Projects</h1>
      </div>
      <br />
      <StyleRoot>
        <div className="row pulse-hover projects" style={animations.fadeIn}>
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </StyleRoot>
      <Modal
        style={{
          position: "absolute",
          zIndex: 100,
          width: "45%",
          height: "45%",
          margin: "auto",
          backgroundColor: "#aaabb8",
          borderRadius: "4%",
          padding: "2%",
        }}
        open={showDemo.show}
        onClose={() => setShowDemo({ show: false, which: [] })}
      >
        {demoVid}
      </Modal>
    </div>
  );
};
