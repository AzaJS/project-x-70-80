import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditProduct from '../components/Products/EditProduct';
import { useProducts } from '../contexts/productsContext';

const EditProductPage = () => {
    
    return (
        <div>
            <EditProduct/>
        </div>
    );
};

export default EditProductPage;