import { Box, Typography } from '@mui/material'
import React from 'react'
import Shirt from '@assests/bag.png'
import * as styles from './productCard.style'
const ProductCard = () => {
    return (
        <Box sx={styles.mainProduct}>
            {Array(9).fill(<Box sx={styles.card}>
                <Box component='img' src={Shirt} width='100%' />
                <Box sx={styles.cardContent}>
                    <Typography variant="body1" color='gray.400'>Glomy Hoodie</Typography>
                    <Typography variant="body2" fontWeight='bold'>450$</Typography>
                </Box>
            </Box>)}
        </Box>
    )
}

export default ProductCard