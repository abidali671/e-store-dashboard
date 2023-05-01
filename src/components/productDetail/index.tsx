import React, { useState } from 'react';
import Container from '@components/container';

import { useParams } from 'react-router-dom';
import { productData } from 'src/data/product';
import { Box, Stack, Typography } from '@mui/material';
import { Breadcrumbs, Card } from '@components';
import * as styles from './productDetail.style';
import Shirt from '@assests/shirt.png';

const ProductOverview = () => {
    const [activeContent, setActiveContent] = useState('content1');
    const { id } = useParams();
    const product = productData.find((item) => item.id === id);
    console.log(product);

    const handleClick = (content) => {
        setActiveContent(content);
    };
    return (
        <Container>
            <Typography variant='h5' fontWeight='bold'>
                Category
            </Typography>
            <Breadcrumbs />
            <Card title='Product Detail'>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={styles.gridBox}>
                        <Box
                            gridColumn={{ md: 'span 4', xs: 'span 12' }}
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        >
                            <Box component='img' src={product.product} sx={{ width: '80%' }} />
                            <Stack flexDirection='row' gap={1} alignItems='center' justifyContent='center'>
                                {Array(3).fill(<Box component='img' src={Shirt} sx={{ width: '10%' }} />)}

                            </Stack>
                        </Box>
                        <Box gridColumn={{ md: 'span 5', xs: 'span 12' }}>
                            <Box>
                                <Typography variant='subtitle2' color='gray.300'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus impedit
                                    perspiciatis dicta deleniti quae dolorem animi beatae consectetur voluptatum
                                    corporis, alias, maiores sunt ut iure quis sequi ea autem totam est commodi atque,
                                    mollitia consequatur. In ipsam delectus velit neque?
                                </Typography>
                                <br />
                                <Typography variant='subtitle2' color='gray.300'>
                                    Available offers <br /> <br /> Special Price : Get extra 16% off (price inclusive
                                    of discount) T&C
                                </Typography>
                                <br />
                                <Typography variant='subtitle2' color='gray.300'>

                                    Bank Offer : 10% off on XYZ Bank Cards, up to $12. On orders of $200 and above T&C
                                </Typography>
                                <br />
                                <Typography variant='subtitle2' color='gray.300'>

                                    Bank Offer : 5% Unlimited Cashback on Ekka XYZ Bank Credit Card T&C
                                </Typography>
                                <br />
                                <Typography variant='subtitle2' color='gray.300'>
                                    Bank Offer : Flat $50 off on first Ekka Pay Later order of $200 and above T&C
                                </Typography>
                                <Box sx={{ padding: '10px 0px' }}>
                                    <Typography variant='subtitle1' color='black'>
                                        PRICE: {product.price}
                                    </Typography>
                                    <Typography variant='subtitle1' color='gray.200'>
                                        {product.name}
                                    </Typography>
                                    <Stack flexDirection='row' gap='8px' pt={1}>
                                        {Array(4).fill(<Box sx={styles.colorBox} />)}

                                    </Stack>
                                </Box>
                                <Stack flexDirection='row' gap='18px'>
                                    <Box width='120px'>
                                        <Typography variant='h6' color='gray.400' sx={styles.stockBox}>
                                            Available <br /> 180
                                        </Typography>
                                    </Box>
                                    <Box width='120px'>
                                        <Typography variant='h6' color='gray.400' sx={styles.stockBox}>
                                            Pending <br /> 180
                                        </Typography>
                                    </Box>
                                    <Box width='120px'>
                                        <Typography variant='h6' color='gray.400' sx={styles.stockBox}>
                                            Order <br /> 180
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            border: '1px solid',
                            borderColor: 'gray.100',
                            margin: '20px 40px',
                            padding: '20px',
                        }}
                    >
                        <Stack flexDirection='row' gap={2}>
                            <Typography onClick={() => handleClick('content1')} variant='h6' color='initial' fontWeight='bold' sx={activeContent === 'content1' && { borderBottom: '2px solid blue' }}>
                                DETAIL
                            </Typography>
                            <Typography onClick={() => handleClick('content2')} variant='h6' color='initial' fontWeight='bold' sx={activeContent === 'content2' && { borderBottom: '2px solid blue' }}>
                                INFO
                            </Typography>
                            <Typography onClick={() => handleClick('content3')} variant='h6' color='initial' fontWeight='bold' sx={activeContent === 'content3' && { borderBottom: '2px solid blue' }}>
                                REVIEWS
                            </Typography>
                        </Stack>
                        {activeContent === 'content1' && <Box pt={2}>
                            <Typography variant='subtitle2' color='gray.400'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quod rem saepe
                                commodi assumenda nostrum voluptate veniam mollitia alias nam harum ea non quam, aut
                                repellendus quisquam impedit labore tempore. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Deserunt quod rem saepe commodi assumenda nostrum voluptate veniam
                                mollitia alias nam harum ea non quam, aut repellendus quisquam impedit labore
                                tempore.
                            </Typography>
                            <ul >
                                <li>
                                    <Typography variant='subtitle2' color='gray.400'>
                                        Any Product types that You want - Simple, Configurable
                                    </Typography>
                                </li>
                                <li>

                                    <Typography variant='subtitle2' color='gray.400'>
                                        Downloadable/Digital Products, Virtual Products
                                    </Typography>
                                </li>
                                <li>

                                    <Typography variant='subtitle2' color='gray.400'>

                                        Inventory Management with Backordered items
                                    </Typography>
                                </li>
                                <li>

                                    <Typography variant='subtitle2' color='gray.400'>

                                        Flatlock seams throughout.
                                    </Typography>
                                </li>
                            </ul>
                        </Box>}
                        {activeContent === 'content2' && <Box pt={2}>
                            <Typography variant='subtitle2' color='gray.400'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quod rem saepe
                                commodi assumenda nostrum voluptate veniam mollitia alias nam harum ea non quam, aut
                                repellendus quisquam impedit labore tempore. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Deserunt quod rem saepe commodi assumenda nostrum voluptate veniam
                                mollitia alias nam harum ea non quam, aut repellendus quisquam impedit labore
                                tempore.
                            </Typography>
                            <ul >
                                <li>
                                    <Typography variant='subtitle2' color='gray.400'>
                                        this is content 2
                                    </Typography>
                                </li>
                                <li>

                                    <Typography variant='subtitle2' color='gray.400'>
                                        Downloadable/Digital Products, Virtual Products
                                    </Typography>
                                </li>
                                <li>

                                    <Typography variant='subtitle2' color='gray.400'>

                                        Inventory Management with Backordered items
                                    </Typography>
                                </li>
                                <li>

                                    <Typography variant='subtitle2' color='gray.400'>

                                        Flatlock seams throughout.
                                    </Typography>
                                </li>
                            </ul>
                        </Box>}
                    </Box>
                </Box>
            </Card>
        </Container>
    );
};

export default ProductOverview;
