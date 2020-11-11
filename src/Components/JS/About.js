import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import profPic from "../../Images/PP_ProfilePic.JPG";
import matlab from "../../Images/matlab.png";
import html from "../../Images/html.png";
import java from "../../Images/java.png";
import Csharp from "../../Images/Csharp.png";
import css from "../../Images/css.png";
import js from "../../Images/js.png";
import react from "../../Images/react.png";
import c from "../../Images/c.png";
import sql from "../../Images/sql.png";
import vscode from "../../Images/vscode.png";
import git from "../../Images/git.png";
import unity from "../../Images/unity.png";

export const About = (props) => {
  return (
    <div className="page">
      <div className="row">
        <h1>Who is Sydney?</h1>
      </div>
      <br />
      <div className="row">
        <div className="onethird-column">
          <img
            className="profile-pic"
            alt="profile pic"
            src={profPic}
            width="25%"
          />
        </div>
        <div className="twothirds-column text">
          <h4>Hello, it is a pleasure to e-meet you!</h4>
          <p>
            I am a Computer Science student at UNO. I will be graduating with my
            B.S. in May 2022 and be continuing on to get my M.S. in C.S. through
            UNO's integrated program.
          </p>
          <p>
            My hobbies include playing cards, learning to dance, watching
            softball, going on walks, and watching the greatest TV show of all
            time: Friends.
          </p>
          <p>
            Currently, I am loving to code in React in my free time. In my
            research work at the UNO Biomechanics Research Building, my favorite
            projects that I am involved in are virtual reality projects, where I
            create environments with Unity and C#.
          </p>
          <p>
            In the future, I would love to be a Software Engineer for a company
            that provides its developers with the opportunity to work across
            various technologies, as I love to learn.
          </p>
        </div>
      </div>
      <br />
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
          <Tooltip arrow title="VS Code">
            <img className="skill-pic" alt="vscode" src={vscode} />
          </Tooltip>
          <Tooltip arrow title="Git and GitHub">
            <img className="skill-pic" alt="git" src={git} />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
