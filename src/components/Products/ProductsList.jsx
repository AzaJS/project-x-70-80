import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useProducts } from "../../contexts/productsContext";
import ProductCard from "../ProductCard";
import SideBar from "./SideBar";

const ProductsList = () => {
  const {getProducts, products} = useProducts()
  useEffect(()=>{
    getProducts()
  },[])
  // console.log(products);
  return (
    <Grid item md={9} sx={{justifyContent: 'center', flexWrap: 'wrap', display: 'flex'}}>
      <Box sx={{ display: "flex", flexWrap: 'wrap', gap: '10px', minHeight: '40vh', mb: "3.5vh" }}>
        {products.map((item)=>(
          <ProductCard item ={item} key={item.id}/>
        ))}
      </Box>
    </Grid>
  );
};

export default ProductsList;
