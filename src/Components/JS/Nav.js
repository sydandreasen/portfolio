import React from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { fadeInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";
import "../SCSS/Nav.scss";

export const Nav = (props) => {
  const pages = ["About", "Projects"];
  let currentTab = pages.indexOf(props.page);

  // setup animation styles
  const animations = {
    fadeInDown: {
      animation: "1s",
      animationName: Radium.keyframes(fadeInDown, "fadeInDown"),
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
