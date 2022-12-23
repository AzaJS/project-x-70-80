import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { useAuth } from "../contexts/authContext";
import { IconButton } from "@mui/material";
import { ADMIN } from "../helpers/consts";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useProducts } from "../contexts/productsContext";

export default function ProductCard({ item }) {
  const { deleteProduct } = useProducts();
  const {
    user: { email },
  } = useAuth();
  console.log(email);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={item.picture}
          alt="green iguana"
          title="greet iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "3",
              //WebkitBoxOrient: "vertical",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {item.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {email == ADMIN ? (
        <>
          <Button onClick={() => deleteProduct(item.id)}>Delete</Button>
          <Button>Edit</Button>
        </>
      ) : (
        <IconButton>
          <AddShoppingCartIcon />
        </IconButton>
      )}
    </Card>
  );
}
