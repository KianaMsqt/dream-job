import * as React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../assets/logo.png";
import Grid from "@mui/material/Grid";

export default function Header() {
  return (
    <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        columnGap={10}
        component="header" 
      >
    <Box sx={{ flexGrow: 1 }} square variant="outlined">
      <AppBar
        position="static"
        sx={{ position: "relative", backgroundColor: "#e1f5fe" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a className="navbar-brand" href="/">
              <img
                src={logo}
                alt="Logo"
                style={{ height: "50px", zIndex: "tooltip" }}
              />
            </a>
          </Typography>

          <NavLink
            to="/"
            style={{
              color: "#1338BE",
              fontWeight: "bolder",
              padding: "15px",
              textDecoration: 0,
            }}
          >
            Job Search
          </NavLink>

          <NavLink
            to="/contact"
            style={{
              color: "#1338BE",
              fontWeight: "bolder",
              padding: "15px",
              textDecoration: 0,
            }}
          >
            Contact
          </NavLink>

          {/* <NavLink
            to="/subscribe"
            style={{
              color: "#1338BE",
              fontWeight: "bolder",
              padding: "15px",
              textDecoration: 0,
            }}
          >
            Subscribe
          </NavLink> */}
          <NavLink
            to="/careersupport"
            style={{
              color: "#1338BE",
              fontWeight: "bold",
              padding: "15px",
              textDecoration: 0,
            }}
            end
          >
            Career
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
    </Grid>
  );
}
