import React from 'react';
import { Card, CardMedia, CardContent, CardAction, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';
/*import classes from '*.module.css';*/

const Product = ({ product }) => {
    const classess = useStyles();
    return (
        <Card  className={classes.root}> 
        <CardMedia className={classes.media} image='' title={Product.name} />
        <CardContent>
            <div className={classes.cardContent}>
                <Typography variant='h5' gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant='h5'>
                    {product.price}
                </Typography>
            </div>
            <Typography variant='h2' color='textSecondary'>{product.description}</Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardAction}>
            <IconButton aria-label="Add to Cart">
                <AddShoppingCart />
            </IconButton>
        </CardActions>
    </Card>
    )
}

export default Product