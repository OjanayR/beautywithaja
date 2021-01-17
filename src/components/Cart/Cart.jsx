import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
/*import classes from '*.module.css';*/

import useStyles from './styles';

const Cart = ({ cart }) => {
    const isEmpty = !cart.line_items.length;
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant ="subtitle1">Looks like your shopping cart is empty, lets start shopping!</Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <div>{item.name}</div>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <di>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </di>
            </div>
        </>

    )

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3"> Your Beauty With Aja Shopping Cart</Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart