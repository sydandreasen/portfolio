import React, { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Card from "@material-ui/core/Card";
import { Gallery } from "./Gallery.js";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";

export const Project = (props) => {
  // set up state of which side of card is shown
  // will be used to trigger animation of card turning over
  // start out as empty string because don't want to turn over on load
  // afterward, toggle between strings of "front" and "back"
  const [side, setSide] = useState("");

  return side === "back" ? (
    // back of card!
    <div className={`pulse-hover-project ${side}`}>
      <Card className={`project`}>
        <div className="flipBack">
          {props.project.back}
          <div className="row skills-and-links-row">
            <CardActions>
              <div className="row">
                {props.project.stack.map((tech) => (
                  <Tooltip arrow key={tech.title} title={tech.title}>
                    <IconButton className="tech">
                      <img src={tech.img} alt={tech.title} />
                    </IconButton>
                  </Tooltip>
                ))}
              </div>
            </CardActions>
            <CardActions>
              <div className="row">
                {props.project.links.map((link) => (
                  <Tooltip
                    arrow
                    key={link.title ? link.title : "Return to Front"}
                    title={link.title ? link.title : "Return to Front"}
                  >
                    <IconButton
                      onClick={link.link ? link.link : () => setSide("front")}
                    >
                      {link.link ? link.icon : <KeyboardArrowLeftIcon />}
                    </IconButton>
                  </Tooltip>
                ))}
              </div>
            </CardActions>
          </div>
        </div>
      </Card>
    </div>
  ) : (
    // front of card!
    <div className={`pulse-hover-project ${side}`}>
      <Card className={`project`}>
        <Gallery images={props.project.images} />
        <CardContent>
          <h3>{props.project.title}</h3>
          <br />
          <p>
            <i>{props.project.description}</i>
          </p>
        </CardContent>
        <div className="row skills-and-links-row">
          <CardActions>
            <div className="row">
              {props.project.stack.map((tech) => (
                <Tooltip arrow key={tech.title} title={tech.title}>
                  <IconButton className="tech">
                    <img src={tech.img} alt={tech.title} />
                  </IconButton>
                </Tooltip>
              ))}
            </div>
          </CardActions>
          <CardActions>
            <div className="row">
              {props.project.links.map((link) => (
                <Tooltip
                  arrow
                  key={link.title ? link.title : "See More Info"}
                  title={link.title ? link.title : "See More Info"}
                >
                  <IconButton
                    onClick={link.link ? link.link : () => setSide("back")}
                  >
                    {link.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </div>
          </CardActions>
        </div>
      </Card>
    </div>
  );
};
