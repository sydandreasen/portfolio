import React from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";

export const Nav = (props) => {
  const pages = ["About", "Projects", "Contact"];
  let currentTab = pages.indexOf(props.page);

  return (
    <AppBar position="static" className="nav-wrapper">
      <Tabs
        className="nav-tabs"
        value={currentTab}
        onChange={(e, newIdx) => props.setPage(pages[newIdx])}
      >
        <Tab label={"About"} className="nav-tab" />
        <Tab label={"Projects"} className="nav-tab" />
        <Tab label={"Contact"} className="nav-tab" />
      </Tabs>
    </AppBar>
  );
};
