import React from "react";
import { Products, Navbar } from "./components";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

const theme = createTheme();
const useStyles = makeStyles();

function App() {
  const classes = useStyles;

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Navbar />
        <Products />
      </div>
    </ThemeProvider>
  );
}

export default App;
