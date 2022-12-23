import { Box, Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/productsContext";

const EditProduct = () => {
  const { getOneProduct, oneProduct } = useProducts();
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  console.log(oneProduct);
  return (
    <Box sx={{ width: "60vw", margin: "10vh auto" }}>
      <TextField
        fullWidth
        variant="outlined"
        label="Name"
        name="name"
        id="outlined-basic"
        // value={}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Description"
        name="description"
        id="outlined-basic"
        // value={}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Price"
        name="price"
        id="outlined-basic"
        // value={}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Picture"
        name="picture"
        id="outlined-basic"
        // value={}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Type"
        name="type"
        id="outlined-basic"
        // value={}
      />
      <Button variant="outlined" fullWidth size="large">
        Edit Product
      </Button>
    </Box>
  );
};

export default EditProduct;
