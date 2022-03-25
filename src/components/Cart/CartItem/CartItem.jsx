import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const CartItem = ({ item }) => {
  return (
    <Card>
      <CardMedia image={item.image.url} alt={item.name} />
      <CardContent>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.fomatted_with_symboks}
        </Typography>
      </CardContent>
      <CardActions>
        <div>
          <Button type="button" size="small">
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button type="button" size="small">
            +
          </Button>
        </div>
        <Button variant="contained" type="button" color="secondary">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
