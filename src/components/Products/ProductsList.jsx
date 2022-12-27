import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/productsContext";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const [searchParams,setSearchParams] = useSearchParams()
  const { getProducts, products } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);


  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <Grid
      item
      md={9}
      sx={{ justifyContent: "center", display: "flex", flexWrap: "wrap" }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minHeight: "40vh",
          gap: "10px",
        }}
      >
        {products.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </Box>
    </Grid>
  );
};

export default ProductsList;