import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useProducts } from '../contexts/productsContext';
import { useAuth } from '../contexts/authContext';
import { ADMIN } from '../helpers/consts';
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/cartContext';

export default function ProductCard({item}) {
  const navigate = useNavigate()
    const {addProductToCart} = useCart()
    const {deleteProduct} = useProducts()
    const {
        user:{email},
    }= useAuth()
  return (
    <Card 
    sx={{ maxWidth: 345 }}>
      <CardMedia 
         sx={{height: 140, backgroundImage: `url(${item.picture})`, backgroundSize: 130, cursor: 'pointer'}}

        title = {item.type}
        onClick={()=>navigate(`/products/${item.id}`)}
      />
      <CardContent>
        <Typography 
        gutterBottom 
        variant="h5" 
        component="div">
          {item.name}
        </Typography>
        <Typography 
        gutterBottom 
        variant="h5" 
        component="div" 
        sx={{justifyContent: 'center', display:'flex', color: 'red', fontWeight: '700'}}>
            {item.price}$
        </Typography>
        <Typography 
        sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '3',
            WebkitBoxOrient: 'vertical',
        }} 
        variant="body2" 
        color="text.secondary">
         {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        {email==ADMIN? (<>
        <Button onClick={()=>deleteProduct(item.id)}>Delete</Button>
        <Button onClick={()=>navigate(`/edit/${item.id}`)}>Edit</Button>
        </>) :
         <IconButton onClick={()=> addProductToCart(item)}>
            <AddShoppingCartIcon/>
        </IconButton>
        }
      </CardActions>
    </Card>
  );
}