import React from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import {
  fadeInLeft,
  fadeInRight,
  fadeInDown,
  fadeInUp,
  fadeIn,
  pulse,
} from "react-animations";
import Radium, { StyleRoot } from "radium";

export const Nav = (props) => {
  const pages = ["About", "Projects"];
  let currentTab = pages.indexOf(props.page);

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
      animationDelay: "0.7s",
      animation: "1s",
      animationName: Radium.keyframes(pulse, "pulse"),
    },
  };

  return (
    <StyleRoot>
      <div style={animations.fadeInDown}>
        <AppBar position="static" className="nav-wrapper">
          <Tabs
            className="nav-tabs"
            value={currentTab}
            onChange={(e, newIdx) => props.setPage(pages[newIdx])}
          >
            <Tab label={"About"} className="nav-tab" />
            <Tab label={"Projects"} className="nav-tab" />
          </Tabs>
        </AppBar>
      </div>
    </StyleRoot>
  );
};
