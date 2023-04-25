import Shirt from '@assests/bag.png'
import Container from '@components/container'
import FormikTextField from '@components/formik_text_field'
import { Box, Stack, Typography, Grid, TextField } from '@mui/material'
import React from 'react'

const AddProduct = () => {
    return (
        <Container>
            <Typography variant='h5' fontWeight='bold'>
                Products
            </Typography>
            <Box sx={{ border: '1px solid', borderColor: 'gray.100', borderRadius: '20px' }}>
                <Grid container padding={3} spacing={3}>
                    <Grid item xs={6} md={4}>
                        <Box>
                            <Box sx={{ border: '1px solid', borderColor: 'gray.100', borderRadius: '20px' }}>
                                <Box component='img' sx={{ width: '100%', padding: '5px' }} src={Shirt} />
                            </Box>

                            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr,1fr' }}>
                                <Box component='img' sx={{ width: '50%', padding: '5px' }} src={Shirt} />
                                <Box component='img' sx={{ width: '50%', padding: '5px' }} src={Shirt} />

                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <Box>
                            <Stack
                                sx={{ width: '100%', gap: '20px', }} >
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="PRODUCT NAME"

                                    sx={{ width: '50%' }}
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="SELECT CATEGORIES"

                                    sx={{ width: '50%' }}
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="SLUG"

                                />
                                <TextField
                                    required
                                    id="outlined"
                                    label="SORT DESCRIPTION"

                                />
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>

            </Box>
        </Container>

    )
}

export default AddProduct