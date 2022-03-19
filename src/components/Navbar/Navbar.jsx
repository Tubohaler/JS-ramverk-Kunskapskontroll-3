import React from "react";
import {
  AppBar,
  ToolBar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Toolbar,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

import logo from "../../assets/logo.png";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.AppBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className="classes.title" color="inherit">
            <img
              src={logo}
              alt="Cockasian.js"
              height="25px"
              className={classes.image}
            />
            Cockasian.js
          </Typography>
          <div className={classes.grow} />
          <div classNameButton={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <badge badgeContent={2} color="seconday">
                <ShoppingCart />
              </badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
