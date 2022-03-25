import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
  const EmptyCart = () => {
    <Typography variant="subtitle1">
      You have no stuff in the cart, go get some!
    </Typography>;
  };

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} />{" "}
          </Grid>
        ))}
      </Grid>
      <div>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Empty Cart
          </Button>
          <Button
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Check Out
          </Button>
        </div>
      </div>
    </>
  );

  if (!cart.line_items) return "loading...";

  return (
    <Container>
      <div />
      <Typography variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
