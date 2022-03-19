import React from "react";
import { Grid } from "@mui/material";

import Product from "./Product/Product.jsx";
import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes.",
    price: "100kr",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/altra-superior-5-6-1627483918.jpg",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple Macbook.",
    price: "500kr",
    image:
      "https://www.apple.com/v/macbook-pro-13/i/images/overview/hero_endframe__bsza6x4fldiq_medium.jpg",
  },
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
