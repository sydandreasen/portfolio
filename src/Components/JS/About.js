import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import {
  fadeInLeft,
  fadeInRight,
  fadeInDown,
  fadeInUp,
  fadeIn,
  pulse,
} from "react-animations";
import Radium, { StyleRoot } from "radium";
import profPic from "../../Images/PP_ProfilePic.JPG";
import matlab from "../../Images/Tech/matlab.png";
import html from "../../Images/Tech/html.png";
import java from "../../Images/Tech/java.png";
import Csharp from "../../Images/Tech/Csharp.png";
import css from "../../Images/Tech/css.png";
import js from "../../Images/Tech/js.png";
import react from "../../Images/Tech/react.png";
import c from "../../Images/Tech/c.png";
import sql from "../../Images/Tech/sql.png";
import firebase from "../../Images/Tech/firebase.png";
import nosql from "../../Images/Tech/nosql.png";
import vscode from "../../Images/Tech/vscode.png";
import git from "../../Images/Tech/git.png";
import unity from "../../Images/Tech/unity.png";

export const About = (props) => {
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
      animationDelay: "0.3s",
      animation: "1s",
      animationName: Radium.keyframes(pulse, "pulse"),
    },
  };

  return (
    <div className="page">
      <div className="row">
        <StyleRoot>
          <h1 style={[animations.fadeIn, animations.pulse]}>Who is Sydney?</h1>
        </StyleRoot>
      </div>
      <br />
      <div className="row">
        <div className="onethird-column">
          <StyleRoot>
            <img
              style={animations.fadeInLeft}
              className="profile-pic"
              alt="profile pic"
              src={profPic}
              width="25%"
            />
          </StyleRoot>
        </div>
        <div className="twothirds-column text">
          <StyleRoot>
            <div style={animations.fadeInRight}>
              <h4>Hello, it is a pleasure to e-meet you!</h4>
              <p>
                I am a Computer Science student at UNO. I will be graduating
                with my B.S. in May 2022 and be continuing on to get my M.S. in
                C.S. through UNO's integrated program.
              </p>
              <p>
                My hobbies include playing cards, learning to dance, watching
                softball, going on walks, and watching the greatest TV show of
                all time: Friends.
              </p>
              <p>
                Currently, I am loving to code in React in my free time. I'd be
                really interested in learning about Angular or .NET with C#
                next. In my research work at the UNO Biomechanics Research
                Building, my favorite projects that I am involved in are virtual
                reality projects, where I create environments with Unity and C#.
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
        <div style={[animations.fadeIn, animations.pulse]}>
          <div className="row skills">
            <div className="row">
              <h3>{`<Skills/>`}</h3>
            </div>
            <div className="row">
              <Tooltip arrow title="HTML">
                <img className="skill-pic" alt="html" src={html} />
              </Tooltip>
              <Tooltip arrow title="CSS">
                <img className="skill-pic" alt="css" src={css} />
              </Tooltip>
              <Tooltip arrow title="JS">
                <img className="skill-pic" alt="js" src={js} />
              </Tooltip>
              <Tooltip arrow title="React">
                <img className="skill-pic" alt="react" src={react} />
              </Tooltip>
              <Tooltip arrow title="C#">
                <img className="skill-pic" alt="c sharp" src={Csharp} />
              </Tooltip>
              <Tooltip arrow title="Unity">
                <img className="skill-pic" alt="unity" src={unity} />
              </Tooltip>
              <Tooltip arrow title="SQL and SSMS">
                <img className="skill-pic" alt="sql" src={sql} />
              </Tooltip>
              <Tooltip arrow title="MATLAB">
                <img className="skill-pic" alt="matlab" src={matlab} />
              </Tooltip>
              <Tooltip arrow title="Java">
                <img className="skill-pic" alt="java" src={java} />
              </Tooltip>
              <Tooltip arrow title="C">
                <img className="skill-pic" alt="c" src={c} />
              </Tooltip>
              <Tooltip arrow title="Firebase">
                <img className="skill-pic" alt="firebase" src={firebase} />
              </Tooltip>
              <Tooltip arrow title="NoSQL">
                <img className="skill-pic" alt="nosql" src={nosql} />
              </Tooltip>
              <Tooltip arrow title="VS Code">
                <img className="skill-pic" alt="vscode" src={vscode} />
              </Tooltip>
              <Tooltip arrow title="Git and GitHub">
                <img className="skill-pic" alt="git" src={git} />
              </Tooltip>
            </div>
          </div>
        </div>
      </StyleRoot>
      <br />
      <div className="row">
        <StyleRoot>
          <h1 style={[animations.fadeIn, animations.pulse]}>Contact Sydney</h1>
        </StyleRoot>
      </div>
      <div className="row contacts">
        <div className="half-column">
          <StyleRoot>
            <div style={animations.fadeInLeft}>
              <p>
                <EmailIcon style={{ verticalAlign: "middle" }} />
                <span> Email Me : </span>
                <a href="mailto:sydandreasen@abbnebraska.com">
                  sydandreasen@abbnebraska.com
                </a>
              </p>
              <p>
                <PhoneIcon style={{ verticalAlign: "middle" }} />
                <span> Call or Text Me : </span>
                <a href="tel:4022370162">402-237-0162</a>
              </p>
            </div>
          </StyleRoot>
        </div>

        <div className="half-column">
          <StyleRoot>
            <div style={animations.fadeInRight}>
              <p>
                <LinkedInIcon style={{ verticalAlign: "middle" }} />
                <span> LinkedIn Profile : </span>
                <a href="https://www.linkedin.com/in/sydney-a/">sydney-a</a>
              </p>
              <p>
                <FacebookIcon style={{ verticalAlign: "middle" }} />
                <span> Facebook Profile : </span>
                <a href="https://www.facebook.com/sydney.andreasen">
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
