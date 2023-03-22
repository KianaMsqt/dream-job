import * as React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../assets/logo.png";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    {
      label: "Job Search",
      to: "/",
    },
    {
      label: "Contact",
      to: "/contact",
    },
    {
      label: "Career",
      to: "/careersupport",
      end: true,
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
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

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { sm: "none" } }}
            onClick={toggleMenu}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                style={{
                  color: "#1338BE",
                  fontWeight: "bolder",
                  padding: "15px",
                  textDecoration: 0,
                }}
                end={item.end}
              >
                {item.label}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={toggleMenu}
        sx={{ display: { sm: "none", md: "block" } }}
      >
        <List sx={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.to}
              component={NavLink}
              to={item.to}
              onClick={toggleMenu}
            >
              {item.label}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
