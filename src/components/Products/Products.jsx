import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cushion-shoes-7659-1584132587.jpg?crop=1.00xw:0.789xh;0,0.150xh&resize=2048:*' },
    {id: 2, name: 'MacBook', description: 'Apple macbook.', price: '$10', image: 'https://webobjects2.cdw.com/is/image/CDW/6013932?$product-main$' },

];

const Products = () => {
    return (
    <main>
        <Grid container justify= "center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                    </Grid>
            ))}
        </Grid>
    </main>

    );

};

export default Products;