import React from "react";
import { BottomNavigation } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import TimelineIcon from "@mui/icons-material/Timeline";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer-container p-3 bg-secondary text-light">
      <p className="m-0 text-center fw-bold fs-5">
        Produced by Kiana, Eric, Nick, Ope &copy; Dream Job Finder
      </p>
      <BottomNavigation showLabels className="justify-content-end d-flex mt-2">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <BottomNavigationAction
            label="GitHub"
            href="https://github.com/KianaMsqt/dream-job"
            target="_blank"
            rel="noopener noreferrer"
            icon={<GitHubIcon />}
          />
          <BottomNavigationAction
            label="Timeline"
            href="https://github.com/KianaMsqt/dream-job/branches"
            target="_blank"
            rel="noopener noreferrer"
            icon={<TimelineIcon />}
          />
        </div>
      </BottomNavigation>
    </div>
  );
};

export default Footer;
