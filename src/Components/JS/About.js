import React from "react";
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
          <img className="skill-pic" alt="html" src={html} />
          <img className="skill-pic" alt="css" src={css} />
          <img className="skill-pic" alt="js" src={js} />
          <img className="skill-pic" alt="react" src={react} />
          <img className="skill-pic" alt="c sharp" src={Csharp} />
          <img className="skill-pic" alt="unity" src={unity} />
          <img className="skill-pic" alt="sql" src={sql} />
          <img className="skill-pic" alt="matlab" src={matlab} />
          <img className="skill-pic" alt="java" src={java} />
          <img className="skill-pic" alt="c" src={c} />
          <img className="skill-pic" alt="vscode" src={vscode} />
          <img className="skill-pic" alt="git" src={git} />
        </div>
      </div>
    </div>
  );
};
