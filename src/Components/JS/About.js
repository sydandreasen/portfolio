import React from "react";
import "../SCSS/About.scss";
import Tooltip from "@material-ui/core/Tooltip";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import DescriptionIcon from "@material-ui/icons/Description";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import profPic from "../../Images/Profile.webp";
import matlab from "../../Images/Tech/matlab.png";
import html from "../../Images/Tech/html.png";
import java from "../../Images/Tech/java.png";
import Csharp from "../../Images/Tech/Csharp.png";
import css from "../../Images/Tech/css.png";
import js from "../../Images/Tech/js.png";
import ts from "../../Images/Tech/typescript.png";
import react from "../../Images/Tech/react.png";
import angular from "../../Images/Tech/angular.png";
import c from "../../Images/Tech/c.png";
import sql from "../../Images/Tech/sql.png";
import net from "../../Images/Tech/dotnetcore.png";
import firebase from "../../Images/Tech/firebase.png";
import nosql from "../../Images/Tech/nosql.png";
import vscode from "../../Images/Tech/vscode.png";
import git from "../../Images/Tech/git.png";
import unity from "../../Images/Tech/unity.png";
import adobexd from "../../Images/Tech/adobexd.png";
import resume from "../../AndreasenResume2023.pdf";

export const About = (props) => {
  // setup animation styles
  const animations = {
    fadeIn: {
      animation: "2s",
      animationName: Radium.keyframes(fadeIn, "fadeIn"),
    },
  };

  // set up list of skills
  const skills = [
    {
      title: "HTML",
      src: html,
    },
    {
      title: "CSS",
      src: css,
    },
    {
      title: "JS",
      src: js,
    },
    {
      title: "TS",
      src: ts,
    },
    {
      title: "React",
      src: react,
    },
    {
      title: "Angular",
      src: angular,
    },
    {
      title: ".NET Core",
      src: net,
    },
    {
      title: "C#",
      src: Csharp,
    },
    {
      title: "Unity",
      src: unity,
    },
    {
      title: "SQL and SSMS",
      src: sql,
    },
    {
      title: "MATLAB",
      src: matlab,
    },
    {
      title: "Java",
      src: java,
    },
    {
      title: "C",
      src: c,
    },
    {
      title: "Firebase",
      src: firebase,
    },
    {
      title: "NoSQL",
      src: nosql,
    },
    {
      title: "VS Code",
      src: vscode,
    },
    {
      title: "Git and GitHub",
      src: git,
    },
    {
      title: "Adobe XD",
      src: adobexd,
    },
  ];

  return (
    <div className="page">
      <div className="row">
        <StyleRoot>
          <h1 style={animations.fadeIn}>Who is Sydney?</h1>
        </StyleRoot>
      </div>
      <br />
      <div className="row">
        <div className="onethird-column pulse-hover">
          <StyleRoot>
            <img
              style={animations.fadeIn}
              className="profile-pic"
              alt="profile pic"
              src={profPic}
              width="25%"
            />
          </StyleRoot>
        </div>
        <div className="twothirds-column text pulse-hover">
          <StyleRoot>
            {/* text greeting */}
            <div style={animations.fadeIn}>
              <p>
                Hello! I am a professional full stack web application developer
                with a B.S. in Computer Science from UNO, and I will earn my
                M.S. in C.S. from UNO in May 2024.
              </p>
              <p>
                I love to learn about design patterns, new technologies, and new
                features in familiar technologies. I enjoy working in a hybrid
                collaborative environment where my teammates and I can learn
                from one another.
              </p>
              <p>
                Professionally, my day-to-day tech stack includes Angular
                frontends, C# .NET Core for REST APIs, and a SQL database
                backend. That said, you will find many other technologies listed
                for the various projects in this portfolio.
              </p>
            </div>
          </StyleRoot>
        </div>
      </div>
      <br />
      <StyleRoot>
        {/* skills */}
        <div style={animations.fadeIn} className="pulse-hover">
          <div className="skills">
            <div>
              <p>
                <b>{`<Skills/>`}</b>
              </p>
            </div>
            <div className="skills-pics">
              {skills.map((skill, index) => (
                <Tooltip key={index} arrow title={skill.title}>
                  <img
                    className="skill-pic"
                    alt={skill.title + " logo"}
                    src={skill.src}
                  />
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </StyleRoot>
      <br />
      <div className="row">
        <StyleRoot>
          <h1 style={animations.fadeIn}>Contact Sydney</h1>
        </StyleRoot>
      </div>
      {/* contacts */}
      <div className="contacts">
        <StyleRoot className="contact">
          <div style={animations.fadeIn} className="pulse-hover">
            <p>
              <EmailIcon style={{ verticalAlign: "middle" }} />
              <span> Email : </span>
              <a href="mailto:sydandreasen@gmail.com">sydandreasen@gmail.com</a>
            </p>
          </div>
        </StyleRoot>

        <StyleRoot className="contact">
          <div style={animations.fadeIn} className="pulse-hover">
            <p>
              <PhoneIcon style={{ verticalAlign: "middle" }} />
              <span> Call or Text : </span>
              <a href="tel:4022370162">402-237-0162</a>
            </p>
          </div>
        </StyleRoot>

        <StyleRoot className="contact">
          <div style={animations.fadeIn} className="pulse-hover">
            <p>
              <DescriptionIcon style={{ verticalAlign: "middle" }} />
              <span> </span>
              <a download href={resume} type="pdf">
                Download My Resume
              </a>
            </p>
          </div>
        </StyleRoot>

        <StyleRoot className="contact">
          <div style={animations.fadeIn} className="pulse-hover">
            <p>
              <LinkedInIcon style={{ verticalAlign: "middle" }} />
              <span> LinkedIn : </span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sydney-a/"
              >
                sydney-a
              </a>
            </p>
          </div>
        </StyleRoot>
      </div>
    </div>
  );
};
