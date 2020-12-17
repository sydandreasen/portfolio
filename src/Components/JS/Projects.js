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
import GetAppIcon from "@material-ui/icons/GetApp";

// import all tech stack images
import react from "../../Images/Tech/react.png";
import js from "../../Images/Tech/js.png";
import css from "../../Images/Tech/css.png";
import html from "../../Images/Tech/html.png";
import firebase from "../../Images/Tech/firebase.png";
import nosql from "../../Images/Tech/nosql.png";
import edamam from "../../Images/Tech/edamam.png";
import unity from "../../Images/Tech/unity.png";
import csharp from "../../Images/Tech/Csharp.png";
import mui from "../../Images/Tech/materialui.png";
import antd from "../../Images/Tech/antd.svg";

// import all demo images
import mp1 from "../../Images/DemoPics/MealPlanner/mealplanner-1.png";
import mp2 from "../../Images/DemoPics/MealPlanner/mealplanner-2.png";
import mp3 from "../../Images/DemoPics/MealPlanner/mealplanner-3.png";
import mp4 from "../../Images/DemoPics/MealPlanner/mealplanner-4.png";
import mp5 from "../../Images/DemoPics/MealPlanner/mealplanner-5.png";
import mp6 from "../../Images/DemoPics/MealPlanner/mealplanner-6.png";
import rps1 from "../../Images/DemoPics/RPS/RPS-1.png";
import rps2 from "../../Images/DemoPics/RPS/RPS-2.png";
import rps3 from "../../Images/DemoPics/RPS/RPS-3.png";
import oph from "../../Images/DemoPics/OldPortfolio/oldPortfolio_home.png";
import opa from "../../Images/DemoPics/OldPortfolio/oldPortfolio_about.png";
import opp from "../../Images/DemoPics/OldPortfolio/oldPortfolio_projects.png";
import opi from "../../Images/DemoPics/OldPortfolio/oldPortfolio_internship.png";
import opr from "../../Images/DemoPics/OldPortfolio/oldPortfolio_research.png";
import cards_pic from "../../Images/DemoPics/Cards.png";
import cards_pile from "../../Images/DemoPics/FutureProjects/PlayingCards.jpg";
import music_sand from "../../Images/DemoPics/FutureProjects/MusicalSandArt.jpg";
import port_abt from "../../Images/DemoPics/Portfolio_About.png";

// import demo videos
import rockPaperScissors_1 from "../../Demos/RPS-1.mov";
import mealPlanner_1 from "../../Demos/MP-1.mov";

// import dmg
import cards from "../../Cards.dmg";

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
            {showDemo.which.map((
              video,
              index // array to allow different video format attempts
            ) => (
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
      title: "This Portfolio!",
      description: "brief 'about me' + gallery of projects",
      images: [port_abt],
      stack: [
        { img: react, title: "React" },
        { img: js, title: "JS" },
        { img: css, title: "CSS (SASS)" },
        { img: mui, title: "Material UI Component Library" },
      ],
      links: [
        {
          icon: <GitHubIcon />,
          title: "Go to GitHub Page",
          link: () =>
            // FIXME (after changing repo name to something more resume-friendly -- then also change old portfolio's link after having to change it's repo name)
            window.open("https://github.com/sydandreasen/portfolio-react"),
        },
        {
          icon: <KeyboardArrowRightIcon />,
          title: "See More Info",
        },
      ],
      back: (
        <CardContent>
          <h3>This Portfolio</h3>
          <br />
          <h4>Stack</h4>
          <ul>
            <li>React</li>
            <ul>
              <li>Use Material UI Component Library as building blocks</li>
            </ul>
            <li>JavaScript</li>
            <li>CSS</li>
            <ul>
              <li>with the syntax benefits of SASS!</li>
            </ul>
          </ul>
        </CardContent>
      ),
    },
    {
      title: "Meal Planner",
      description: "plan meals in daily, weekly, or monthly perspective",
      images: [mp1, mp2, mp3, mp4, mp5, mp6],
      stack: [
        { img: react, title: "React" },
        { img: js, title: "JS" },
        { img: css, title: "CSS" },
        { img: firebase, title: "Firebase" },
        { img: nosql, title: "NoSQL" },
        { img: edamam, title: "Edamam API" },
        { img: antd, title: "Ant Design Component Library" },
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
          link: () => setShowDemo({ show: true, which: [mealPlanner_1] }),
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
          link: () => setShowDemo({ show: true, which: [rockPaperScissors_1] }),
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
    {
      title: "'Trash' Card Game",
      description: "play trash against computerized player",
      images: [cards_pic],
      stack: [
        { img: unity, title: "Unity" },
        { img: csharp, title: "C#" },
      ],
      links: [
        {
          icon: (
            <a href={cards} download>
              <GetAppIcon id="get-trash-app" />
            </a>
          ),
          title: "Download the App (For MacOS Users)",
          link: () => {
            document
              .getElementById("get-trash-app")
              .setAttribute("download", cards);
          },
        },
        {
          icon: <KeyboardArrowRightIcon />,
          title: "See More Info",
        },
      ],
      back: (
        <CardContent>
          <h3>'Trash' Card Game</h3>
          <br />
          <h4>Stack</h4>
          <ul>
            <li>Unity Editor - the looks</li>
            <li>
              C# - the works - especially the automation of the computer's turn
            </li>
          </ul>
          <br />
          <h4>How it Works</h4>
          <p>
            When it's your turn, click the active card to play it into the
            correct spot. If a King is active for your turn, follow the
            instructions to pick a place to put that wild card! If you turn a
            card that you already have, or a <i>trash</i> card, your turn is
            over. At that point, watch your computer opponent take their turn!
          </p>
        </CardContent>
      ),
    },
  ];

  const futureProjects = [
    {
      title: "Musical Sand Art",
      description: "play songs to generate sandart to the beat",
      images: [music_sand],
      stack: [],
      links: [
        {
          icon: <KeyboardArrowRightIcon />,
          title: "See More Info",
        },
      ],
      back: (
        <CardContent>
          <h3>Musical Sand Art</h3>
          <br />
          <h4>The Concept</h4>
          <p>
            Imagine a piano keyboard spanning across the top of your screen. Now
            imagine that, instead of keys being pressed as music plays, colored
            sand falls toward the bottom of the screen from the location of each
            note's keyboard key, eventually filling your screen with beautiful
            sand art, unique to the song you selected.
          </p>
          <br />
          <h4>The Top Lessons I Aim to Learn</h4>
          <p>
            I would like to do this project with Python and a GUI framework,
            such as Kivy. This will be the first project that I truly apply
            Python to, so I am excited about a new language's syntax becoming
            more natural to me. As I have experience with Unity, I have worked
            wth physics in projects before, but I am eager to learn how to do
            that in a python framework.
          </p>
          <br />
          <h4>The Inspiration</h4>
          <p>
            I have always loved the power of music, so a project that could
            incorporate that interest is automatically more interesting to me. I
            came up with this specific idea though during a conversation with a
            high school friend who was taking a course about mixing arts and
            technology.
          </p>
        </CardContent>
      ),
    },
    {
      title: "More Card Games!",
      description: "Play Kings in the Corner and More",
      images: [cards_pile],
      stack: [],
      links: [
        {
          icon: <KeyboardArrowRightIcon />,
          title: "See More Info",
        },
      ],
      back: (
        <CardContent>
          <h3>More Card Games</h3>
          <br />
          <h4>The Concept</h4>
          <p>
            Similar, to my 'Trash' card game project, this should be a built
            standalone application to play card games against a computer. With
            some basic understand of what works well for detecting clicks on
            cards, moving cards, and managing logic about a card's value, I want
            to next develop a game that is naturally more complex. With Kings in
            the Corner for example, I will be challenged to develop efficient
            code for a much more logically complex game for what sort of turns
            are allowed. As other games like Kings in the Corner are much more
            dependent on strategy than luck, I will also be challenged to
            develop a drag-and-drop style of play such that the app does not
            make plays on the behalf of the player (besides the computerized
            opponent, of course).
          </p>
          <br />
          <h4>The Inspiration</h4>
          <p>
            I love playing and learning new card games. The strategy speaks to
            my competitive edge, and I would like to combine my interests to
            code more games.
          </p>
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
        <h3>Projects I Have Completed</h3>
        <br />
        <h4>(As if any Project is Truly Ever Complete)</h4>
        <br />
        <div className="row pulse-hover projects" style={animations.fadeIn}>
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
        <br />
        <h3>Projects I am Excited to do Next</h3>
        <br />
        <div className="row pulse-hover projects" style={animations.fadeIn}>
          {futureProjects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </StyleRoot>
      <Modal
        style={{
          position: "absolute",
          zIndex: 100,
          width: "45%",
          height: "max-content",
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
