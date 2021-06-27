import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import DescriptionIcon from "@material-ui/icons/Description";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import profPic from "../../Images/PP_ProfilePic.JPG";
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
import firebase from "../../Images/Tech/firebase.png";
import nosql from "../../Images/Tech/nosql.png";
import vscode from "../../Images/Tech/vscode.png";
import git from "../../Images/Tech/git.png";
import unity from "../../Images/Tech/unity.png";
import adobexd from "../../Images/Tech/adobexd.png";
import resume from "../../Andreasen_Sydney_Resume_2021.pdf";

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
              <h4>Hello, it is a pleasure to e-meet you!</h4>
              <p>
                I am a Computer Science student at UNO. I will be graduating
                with my B.S. in May 2022 and be continuing on as a part-time
                student to get my M.S. in C.S. through UNO's integrated program.
              </p>
              <p>
                My hobbies include playing cards, learning to dance, watching
                softball, going on walks, and watching the greatest TV show of
                all time: Friends.
              </p>
              <p>
                Currently, I very much enjoy programming with React and Angular,
                but I would love to improve my understanding in full stack
                applications. I'd be really interested in learning about .NET
                and MVC architecture next. In my research work at the UNO
                Biomechanics Research Building, my favorite projects that I am
                involved in are virtual reality projects, where I create
                environments with Unity and C#.
              </p>
              <p>
                In the future, I would love to be a Software Engineer for a
                company that provides its developers with the opportunity to
                work across various technologies, as I love to learn.
              </p>
            </div>
          </StyleRoot>
        </div>
      </div>
      <br />
      <StyleRoot>
        {/* skills */}
        <div style={animations.fadeIn} className="pulse-hover">
          <div className="row skills">
            <div className="row">
              <h3>{`<Skills/>`}</h3>
            </div>
            <div className="row">
              {skills.map((skill, index) => (
                <Tooltip key={index} arrow title={skill.title}>
                  <img
                    className="skill-pic"
                    alt={skill.title}
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
      <div className="row contacts">
        <div className="half-column">
          <StyleRoot>
            <div style={animations.fadeIn} className="pulse-hover">
              <p>
                <EmailIcon style={{ verticalAlign: "middle" }} />
                <span> Email Me : </span>
                <a href="mailto:sydandreasen@gmail.com">
                  sydandreasen@gmail.com
                </a>
              </p>
              <p>
                <PhoneIcon style={{ verticalAlign: "middle" }} />
                <span> Call or Text Me : </span>
                <a href="tel:4022370162">402-237-0162</a>
              </p>
              <p>
                <DescriptionIcon style={{ verticalAlign: "middle" }} />
                <span> </span>
                <a download href={resume}>
                  Download My Resume
                </a>
              </p>
            </div>
          </StyleRoot>
        </div>

        <div className="half-column">
          <StyleRoot>
            <div style={animations.fadeIn} className="pulse-hover">
              <p>
                <LinkedInIcon style={{ verticalAlign: "middle" }} />
                <span> LinkedIn Profile : </span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/sydney-a/"
                >
                  sydney-a
                </a>
              </p>
              <p>
                <FacebookIcon style={{ verticalAlign: "middle" }} />
                <span> Facebook Profile : </span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/sydney.andreasen"
                >
                  sydney.andreasen
                </a>
              </p>
            </div>
          </StyleRoot>
        </div>
      </div>
    </div>
  );
};
