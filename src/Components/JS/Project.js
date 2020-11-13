import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";

export const Project = (props) => {
  return (
    <Card>
      {/* TODO : create gallery of images */}
      <CardMedia component="img" image={props.project.images[0]} />
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
              <IconButton onClick={link.link}>{link.icon}</IconButton>
            </Tooltip>
          ))}
        </div>
      </CardActions>
    </Card>
  );
};
