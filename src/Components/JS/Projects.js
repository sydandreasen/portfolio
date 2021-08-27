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
import WebIcon from "@material-ui/icons/Web";

// import all tech stack images
import react from "../../Images/Tech/react.png";
import angular from "../../Images/Tech/angular.png";
import js from "../../Images/Tech/js.png";
import ts from "../../Images/Tech/typescript.png";
import css from "../../Images/Tech/css.png";
import html from "../../Images/Tech/html.png";
import net from "../../Images/Tech/dotnetcore.png";
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
import patient1 from "../../Images/DemoPics/myPatient/myPatient1.png";
import patient2 from "../../Images/DemoPics/myPatient/myPatient2.png";
import ms1 from "../../Images/DemoPics/Minesweeper/ms1.png";
import ms2 from "../../Images/DemoPics/Minesweeper/ms2.png";
import capratecalc from "../../Images/DemoPics/capratecalc.png";
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
import netflix from "../../Images/DemoPics/FutureProjects/Netflix.jpg";
import path_find from "../../Images/DemoPics/FutureProjects/PathFind.jpg";
import chronos_monthly from "../../Images/DemoPics/ProjectChronos/chronos-monthly.png";
import chronos_weekly from "../../Images/DemoPics/ProjectChronos/chronos-weekly.png";
import chronos_daily from "../../Images/DemoPics/ProjectChronos/chronos-daily.png";
import chronos_customization from "../../Images/DemoPics/ProjectChronos/chronos-customization.png";

// import demo videos
import rockPaperScissors_1 from "../../Demos/RPS-1.mov";
import mealPlanner_1 from "../../Demos/MP-1.mov";
import minesweeper from "../../Demos/minesweeper.mov";
import projectChronosDemo from "../../Demos/project-chronos.mp4";

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
            {showDemo.which.map(
              (
                video,
                index // array to allow different video format attempts
              ) => (
                <source src={video} key={index} />
              )
            )}
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
          link: () => window.open("https://github.com/sydandreasen/portfolio"),
        },
        {
          icon: <KeyboardArrowRightIcon />,
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
      title: "myPatient",
      description: "Second place at HackUNO 2021; A 24-hour partner project",
      images: [patient1, patient2],
      stack: [
        { img: react, title: "React" },
        { img: js, title: "JS" },
        { img: css, title: "CSS" },
        { img: html, title: "HTML" },
        { img: firebase, title: "Firebase" },
        { img: nosql, title: "NoSQL" },
        { img: antd, title: "Ant Design Component Library" },
      ],
      links: [
        // import any components at top and put variable names in here
        {
          icon: <GitHubIcon />,
          title: "Go to GitHub Page",
          link: () => window.open("https://github.com/sydandreasen/myPatient"),
        },
        {
          icon: <WebIcon />,
          title: "Open Hackathon Site",
          link: () => window.open("https://devpost.com/software/mypatient"),
        },
        {
          icon: <OpenInNewIcon />,
          title: "Open Live Site",
          link: () => window.open("https://mypatienthackuno1021.web.app/"),
        },
        {
          icon: <KeyboardArrowRightIcon />,
        },
      ],
      back: (
        <CardContent>
          <h3>myPatient</h3>
          <h4>Second Place Winner at HackUNO 2021</h4>
          <h5>
            A 24-hour partner project with{" "}
            <a
              href="https://www.linkedin.com/in/justin-rathbone-11ba73183/"
              target="_blank"
              rel="noreferrer"
            >
              Justin Rathbone
            </a>
          </h5>
          <br />
          <h5>Stack</h5>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Ant Design React Component Library</li>
            <li>Firebase Realtime NoSQL DB - R&D from CRUD</li>
            <li>Hosting via Firebase</li>
            <li>Firebase Authentication</li>
          </ul>
          <br />
          <h5>What it Does</h5>
          <p>
            myPatient is a Software-as-a-Service (SaaS) application that
            provides a homepage listing the doctors at a healthcare facility and
            allows each to securely login to a dashboard. This dashboard
            facilitates quick navigation between the information of all their
            patients currently staying at the hospital. At a glance, the doctor
            can see information about the patient's age, reason for
            hospitalization, vitals, test results, and documentation of their
            diagnosis.
          </p>
          <br />
          <p>
            Check out our README in the repo for more on the project
            inspiration, challenges we ran into, accomplishements we were proud
            to reach in 24 hours of coding, what we learned from the project,
            and what would be next for myPatient.
          </p>
        </CardContent>
      ),
    },
    {
      title: "Minesweeper",
      description: "one day project. play minesweeper whenever",
      images: [ms1, ms2],
      stack: [
        { img: angular, title: "Angular" },
        { img: ts, title: "TS" },
        { img: css, title: "CSS (SASS)" },
        { img: html, title: "HTML" },
      ],
      links: [
        // import any components at top and put variable names in here
        {
          icon: <GitHubIcon />,
          title: "Go to GitHub Page",
          link: () =>
            window.open("https://github.com/sydandreasen/minesweeper"),
        },
        {
          icon: <PlayCircleOutlineIcon />,
          title: "Watch a Demo Video",
          link: () => setShowDemo({ show: true, which: [minesweeper] }),
        },
        {
          icon: <OpenInNewIcon />,
          title: "Open Live Site",
          link: () =>
            window.open("https://sydandreasen.github.io/minesweeper/"),
        },
        {
          icon: <KeyboardArrowRightIcon />,
        },
      ],
      back: (
        <CardContent>
          <h3>Minesweeper</h3>
          <br />
          <h4>Stack</h4>
          <ul>
            <li>Angular</li>
            <li>TypeScript</li>
            <li>CSS (via SASS)</li>
            <li>HTML</li>
          </ul>
          <br />
          <h4>How to Play</h4>
          <ul>
            <li>
              Create a new game with the currently selected difficult level at
              any time.
            </li>
            <li>
              Select a difficulty level to create a new game in that difficulty
              level.
            </li>
            <li>
              Difficulty levels affect the probability of each block being a
              bomb.
            </li>
            <li>Left-click on blocks that you think are safe.</li>
            <li>Right-click on blocks that you want to flag as mines.</li>
            <li>
              To win, left-click all non-mine blocks. Left-click on a mine
              block, and you lose.
            </li>
          </ul>
        </CardContent>
      ),
    },
    {
      title: "FarmLend Capitalization Rate Calculator",
      description: "customer-facing internship project",
      images: [capratecalc],
      stack: [
        { img: angular, title: "Angular" },
        { img: ts, title: "TS" },
        { img: css, title: "CSS (SASS)" },
        { img: html, title: "HTML" },
        { img: net, title: ".NET" },
      ],
      links: [
        // import any components at top and put variable names in here
        {
          icon: <OpenInNewIcon />,
          title: "Open Live Site - go to Cap Rate Calc Tab",
          link: () => window.open("https://www.farmlend.com/calculators"),
        },
        {
          icon: <KeyboardArrowRightIcon />,
        },
      ],
      back: (
        <CardContent>
          <h3>FarmLend Capitalization Rate Calculator</h3>
          <br />
          <h4>Stack</h4>
          <ul>
            <li>Angular</li>
            <li>TypeScript</li>
            <li>CSS (via SASS)</li>
            <li>HTML</li>
            <li>.NET</li>
          </ul>
          <br />
          <h4>What it is</h4>
          <ul>
            <li>
              A customer-facing project that was designed, developed, and
              deployed during my internship at Farm Credit Services of America
              during summer 2021
            </li>
          </ul>
          <br />
          <h4>What it Does</h4>
          <ul>
            <li>
              This calculator can be used by individuals interested in investing
              in agricultural real estate to weigh different purchasing options
              to get the best rate of return.
            </li>
          </ul>
        </CardContent>
      ),
    },
    {
      title: "Project Chronos",
      description: "Introduction to Software Engineering group project",
      images: [
        chronos_weekly,
        chronos_monthly,
        chronos_daily,
        chronos_customization,
      ],
      stack: [
        { img: angular, title: "Angular" },
        { img: ts, title: "TS" },
        { img: css, title: "CSS (SASS)" },
        { img: html, title: "HTML" },
        { img: firebase, title: "Firebase" },
        { img: nosql, title: "NoSQL" },
      ],
      links: [
        // import any components at top and put variable names in here
        {
          icon: <GitHubIcon />,
          title: "Go to GitHub Page",
          link: () =>
            window.open("https://github.com/sydandreasen/project-chronos"),
        },
        {
          icon: <PlayCircleOutlineIcon />,
          title: "Watch the Project's Final Demo Video",
          link: () => setShowDemo({ show: true, which: [projectChronosDemo] }),
        },
        {
          icon: <OpenInNewIcon />,
          title: "Open Live Site",
          link: () =>
            window.open(
              "https://project-chronos-planner.firebaseapp.com/login"
            ),
        },
        {
          icon: <KeyboardArrowRightIcon />,
        },
      ],
      back: (
        <CardContent>
          <h3>Project Chronos</h3>
          <br />
          <h4>A Class Group Project</h4>
          <h5>
            In addition to a dev, I served in the project manager and tech
            support roles in this group.
          </h5>
          <br />
          <h4>Stack</h4>
          <ul>
            <li>Angular, TS, SCSS</li>
            <li>Angular Material and cdkdragdrop component libraries</li>
            <li>
              Google Firebase - hosting, authentication, NoSQL real-time
              database
            </li>
          </ul>
          <br />
          <h4>Basic Features</h4>
          <ul>
            <li>
              Plan metrics, tasks, and notes for individual days by dragging and
              dropping components and entering data
            </li>
            <li>Generate weeks from days</li>
            <li>Export weeks as templates</li>
            <li>
              Customize font family and size, as well as overall theme color and
              which of the three monthly, weekly, daily view should be shown by
              default
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
          link: () =>
            window.open("https://github.com/sydandreasen/portfolio-archive"),
        },
        {
          icon: <OpenInNewIcon />,
          title: "Open Live Site",
          link: () =>
            window.open("https://sydandreasen.github.io/portfolio-archive/"),
        },
        {
          icon: <KeyboardArrowRightIcon />,
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
    {
      title: "Mimic Netflix.com's UI",
      description: "recreate a mockup of Netflix's website",
      images: [netflix],
      stack: [],
      links: [
        {
          icon: <KeyboardArrowRightIcon />,
        },
      ],
      back: (
        <CardContent>
          <h3>Mimic Netflix's UI</h3>
          <br />
          <h4>The Top Lessons</h4>
          <p>
            My main goal of this project is to test myself in CSS. I will
            largely use basic HTML and CSS to recreate the intricate visual
            features of Netlfix's well-known and responsive UI and only use
            React for the ease of repeating organized components.
          </p>
        </CardContent>
      ),
    },
    {
      title: "Pathfinding Visualizer",
      description:
        "generate quickest path from point A to point B, avoiding given obstacles",
      images: [path_find],
      stack: [],
      links: [
        {
          icon: <KeyboardArrowRightIcon />,
        },
      ],
      back: (
        <CardContent>
          <h3>Pathfinding Visualizer</h3>
          <br />
          <h4>The Top Lessons</h4>
          <p>
            While also learning through the creation of the GUI, my main goal
            with this project is to explore the mathematical calculations for
            finding the most ideal path from one location to another.
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
        <h2>Projects I Have Completed</h2>
        <br />
        <h3>(As if any Project is Truly Ever Complete)</h3>
        <br />
        <div className="row projects" style={animations.fadeIn}>
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
        <br />
        <h2>Projects I am Excited to do Next</h2>
        <br />
        <div className="row projects" style={animations.fadeIn}>
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
