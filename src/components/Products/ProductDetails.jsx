import { Button,Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/productsContext';

const ProductDetails = () => {
    const {id}=useParams()
    const {getOneProduct,oneProduct} = useProducts()
    useEffect(()=>{
        getOneProduct(id)
    },[])
   
    return (
       <Paper sx={{m:5}} elevation={24}>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <img src={oneProduct.picture} style={{width:"100%"}}/>
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h3'>{oneProduct.name}</Typography>
                <Typography variant='subtitle1'>{oneProduct.type}</Typography>
                <Typography variant='caption'><strong>{oneProduct.price}$</strong></Typography> <br/>
                <Typography variant='caption'>{oneProduct.description}</Typography>
                <Box>
            <Button variant="outlined">Добавить в корзину</Button>
          </Box>
            </Grid>
        </Grid>
       </Paper>
    );
};

export default ProductDetails;