import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAuth } from '../../contexts/authContext';
import { ADMIN } from '../../helpers/consts';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton } from '@mui/material';
import { useProducts } from '../../contexts/productsContext';

export default function ProductCard({item}) {
    const {deleteProduct} = useProducts()
   const {user: {email}} = useAuth()
   console.log(email)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.picture}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{color: "blue", fontWeight: "700"}}>
          {item.price}$
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item.type}
        </Typography>
        
        <Typography sx={{overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: "3", WebkitBoxOrient: "vertical"}} variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        {email == ADMIN ? (
            <>
            <Button >EDIT</Button>
            <Button onClick={()=> deleteProduct(item.id)}>DELETE</Button>
            </>
        ): (
            <IconButton>
                <AddShoppingCartIcon/>
            </IconButton>
        )}
      </CardActions>
    </Card>
  );
}