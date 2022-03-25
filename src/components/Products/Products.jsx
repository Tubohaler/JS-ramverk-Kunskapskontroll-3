import React from "react";
import Grid from "@mui/material/Grid";

import Product from "./Product/Product";

const Products = ({ products, onAddToCart }) => {
  return (
    <main>
      <div />
      <Grid
        container
        spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
