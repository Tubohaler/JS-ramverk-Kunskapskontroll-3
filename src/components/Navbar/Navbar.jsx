import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { styled } from "@mui/material/styles";
import logo from "../../assets/logo.png";
// import useStyles from "./styles.js";

const Navbar = () => {
  const classes = styled();

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
                <AddShoppingCartIcon />
              </badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
