import { Button, TextField } from '@mui/material';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/productsContext';

const EditProduct = () => {

    const {getOneProduct, oneProduct,editOneProduct} = useProducts()
    const [product, setProduct] = useState(oneProduct)
    const {id}= useParams()
    const navigate = useNavigate()


    useEffect(()=>{
        setProduct(oneProduct)
    },[oneProduct])


    console.log(product);
    useEffect(()=>{
        getOneProduct(id)
    },[])


    const handleInp = (e)=>{
        let obj = {
            ...product,
            [e.target.name] : e.target.value,

        }
        setProduct(obj)
    }

    return (
        
        <Box sx={{ width: "60vw", margin: "10vh auto" }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Name"
          name="name"
          id="outlined-basic"
          onChange={handleInp}
          value={product.name|| ''}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Description"
          name="description"
          id="outlined-basic"
        onChange={handleInp}

          value={product.description || ''}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Price"
          name="price"
          id="outlined-basic"
        onChange={handleInp}

          value={product.price || ''}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Picture"
          name="picture"
          id="outlined-basic"
        onChange={handleInp}

          value={product.picture || ''}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Type"
          name="type"
          id="outlined-basic"
        onChange={handleInp}

          value={product.type || ''}
        />
        <Button fullWidth size='large' variant='outlined' onClick={()=>{
        editOneProduct(id,product)
            navigate(-1)
}
        }>Edit Product</Button>
      </Box>
        
    );
};

export default EditProduct;