import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <img src={logo} alt="Cockasian.js" height="50px" />
          <IconButton aria-label="Show cart items" color="inherit">
            <Badge badgeContent={2} color="secondary" variant="standard">
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
