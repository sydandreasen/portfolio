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
    <Card className={side}>
      <CardContent>
        {/* TODO : replace this with different content on tech stack, use of each component, and basic project features, and wishlist items */}
        <h4>{props.project.title}</h4>
        <br />
        <p>
          <i>{props.project.description}</i>
        </p>
      </CardContent>
      <CardActions>
        <div className="row">
          {/* TODO : restyle icon location */}
          <Tooltip arrow title={"Go Back"}>
            <IconButton onClick={() => setSide("front")}>
              <KeyboardArrowLeftIcon />
            </IconButton>
          </Tooltip>
        </div>
      </CardActions>
    </Card>
  ) : (
    <Card className={side}>
      <Gallery images={props.project.images} />
      <CardContent>
        <h2>{props.project.title}</h2>
        <br />
        <p>
          <i>{props.project.description}</i>
        </p>
      </CardContent>
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
        {/* TODO : increase responsiveness between these two groupings */}
        <div className="row">
          {props.project.links.map((link) => (
            <Tooltip arrow key={link.title} title={link.title}>
              <IconButton
                onClick={link.link ? link.link : () => setSide("back")}
              >
                {link.icon}
              </IconButton>
            </Tooltip>
          ))}
        </div>
      </CardActions>
    </Card>
  );
};
