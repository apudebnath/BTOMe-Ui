import { Box, Button, Card, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [orderData, newOrderData] = useState({});

    // get data from database
    useEffect(() => {
        const url=(`https://gentle-woodland-78175.herokuapp.com/all-products?productId=${id}`)
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [id])
    //collect form data
    const handleOnBlur= e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...orderData}
        newInfo[field] = value;
        newOrderData(newInfo);
    }
    const handleOrderSubmit = e => {
        e.preventDefault();
        // prepare order data
        const orderInfo = {
            ...orderData,
            status: 'Pending',
            price: product.productOfferPrice,
        }
        console.log(orderInfo);
        fetch('https://gentle-woodland-78175.herokuapp.com/add-order',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Order Submit Successfully')
            }
        })
        e.target.reset();
    }
    return (
        <Container sx={{py:5}}>
        <div className='pt-5 mt-5'>
            <h2>Product Details</h2>
        </div>
            <Box sx={{FlexGrow: 1, Py: 5}}>
                <Typography variant='h4' sx={{py:3}}>
                    Order For best quality Product
                </Typography>
                <Card variant="outlined">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box>
                                <Card variant="outlined" square>
                                    <img style={{width: '100%'}} src={product.productImage} alt="" />
                                    <Typography variant="h5" sx={{pt: 3}}>{product.productName}</Typography>
                                    <hr />
                                    <Box style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px'}}>
                                        <Typography variant="h6" sx={{pb: 3, color: 'red'}}>Original Price: $ {product.productMainPrice}</Typography>
                                        <Typography variant="h6" sx={{pb: 3, color: "green"}}>Discount Price: $ {product.productOfferPrice}</Typography>
                                    </Box>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Box >
                                <Card variant="outlined" square sx={{m:5, pb: 5, borderRadius: 2}} style={{background: 'rgba(165, 189, 204, 0.2)'}}>
                                    <Typography variant="h5" sx={{pt: 4}}>Proceed to Order</Typography>
                                    <hr />
                                    <form onSubmit={handleOrderSubmit}>
                                        <TextField
                                          sx={{width: '60%', mb:2}}
                                          required
                                          label="Your Name"
                                          id="outlined-size-small"
                                          size="small"
                                          name="name"
                                          type="text"
                                          DefaultValue=""
                                          onBlur={handleOnBlur}
                                          ></TextField>
                                        <TextField
                                          sx={{width: '60%', mb:2}}
                                          required
                                          label="Your Email"
                                          id="outlined-size-small"
                                          size="small"
                                          name="email"
                                          type="email"
                                          DefaultValue=""
                                          onBlur={handleOnBlur}
                                          ></TextField>
                                        <TextField
                                          sx={{width: '60%', mb:2}}
                                          required
                                          label="Your Phone Number"
                                          id="outlined-size-small"
                                          size="small"
                                          name="phone"
                                          type="text"
                                          onBlur={handleOnBlur}
                                          ></TextField>
                                        <TextField
                                          sx={{width: '60%', mb:2}}
                                          required
                                          label="Your Address"
                                          id="outlined-size-small"
                                          size="small"
                                          name="address"
                                          type="text"
                                          onBlur={handleOnBlur}
                                          ></TextField>
                                        <TextField
                                          sx={{width: '60%', mb:2}}
                                          required
                                          label="Your City"
                                          id="outlined-size-small"
                                          size="small"
                                          name="city"
                                          type="text"
                                          onBlur={handleOnBlur}
                                          ></TextField>
                                        <Button type="submit" sx={{width: '60%',}}
                                            variant='contained'
                                            style={{background: '#f46709'}}>Purchase</Button> 
                                    </form>
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </Container>

    );
};

export default ProductDetails;