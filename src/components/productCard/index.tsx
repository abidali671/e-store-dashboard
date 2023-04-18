import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import Shirt from '@assests/bag.png'
import * as styles from './productCard.style'
import useAxios from 'src/axios'
const ProductCard = ({ title, price, image, key }) => {
    return (

        <Box sx={styles.card} key={key}>
            <Box component='img' src={image} sx={{ height: '200px', width: '60%', objectFit: 'contain', borderRadius: '20px 20px 0px 0px' }} />
            <Box sx={styles.cardContent}>
                <Typography variant='body1' color='gray.400'>{title}</Typography>
                <Typography variant='body2' fontWeight='bold'>{price + '$'}</Typography>
            </Box>
        </Box>

    )
}

export default ProductCard