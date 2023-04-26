import Shirt from '@assests/bag.png';
import Container from '@components/container';
import FormikTextField from '@components/formik_text_field';
import { Box, Stack, Typography, Grid, TextField } from '@mui/material';
import React from 'react';

const AddProduct = () => {
	return (
		<Container>
			<Typography variant='h5' fontWeight='bold'>
				Products
			</Typography>
			<Box sx={{ border: '1px solid', borderColor: 'gray.100', borderRadius: '20px' }}>
				<Box sx={{ display: 'grid', p: 3, gap: 3, gridTemplateColumns: 'repeat(12,1fr)' }}>
					<Box gridColumn={{ md: 'span 4', xs: 'span 12' }}>
						<Box
							sx={{
								border: '1px solid',
								borderColor: 'gray.100',
								borderRadius: '20px',
								aspectRatio: '4 / 3',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Box>
								<Typography variant='h2' fontWeight='bold' textAlign='center' color='gray.500'>
									765 x 850
								</Typography>
								<Typography variant='body1' color='gray.100'>
									Please Choose Image According to Aspected Ratio
								</Typography>
							</Box>
						</Box>

						<Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, paddingTop: 3 }}>
							<Box
								sx={{
									aspectRatio: '4/3',
									backgroundColor: 'gray.50',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									border: '1px solid',
									borderColor: 'gray.100',
									borderRadius: '16px',
								}}
							>
								<Typography variant='body2' fontWeight='bold' textAlign='center' color='gray.500'>
									750 x 850
								</Typography>
							</Box>
							<Box
								sx={{
									border: '1px solid',
									borderColor: 'gray.100',
									borderRadius: '16px',
									backgroundColor: 'gray.50',
									aspectRatio: '4/3',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Typography variant='body2' fontWeight='bold' textAlign='center' color='gray.500'>
									750 x 850
								</Typography>
							</Box>
							<Box
								sx={{
									aspectRatio: '4/3',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									backgroundColor: 'gray.50',
									border: '1px solid',
									borderColor: 'gray.100',
									borderRadius: '16px',
								}}
							>
								<Typography variant='body2' fontWeight='bold' textAlign='center' color='gray.500'>
									750 x 850
								</Typography>
							</Box>
							<Box
								sx={{
									aspectRatio: '4/3',
									display: 'flex',
									alignItems: 'center',
									backgroundColor: 'gray.50',
									justifyContent: 'center',
									border: '1px solid',
									borderColor: 'gray.100',
									borderRadius: '16px',
								}}
							>
								<Typography variant='body2' fontWeight='bold' textAlign='center' color='gray.500'>
									750 x 850
								</Typography>
							</Box>
							<Box
								sx={{
									aspectRatio: '4/3',
									display: 'flex',
									alignItems: 'center',
									backgroundColor: 'gray.50',
									justifyContent: 'center',
									border: '1px solid',
									borderColor: 'gray.100',
									borderRadius: '16px',
								}}
							>
								<Typography variant='body2' fontWeight='bold' textAlign='center' color='gray.500'>
									750 x 850
								</Typography>
							</Box>
						</Box>
					</Box>
					<Stack gridColumn={{ md: 'span 8', xs: 'span 12' }} sx={{ width: '100%', gap: '20px' }}>
						<TextField required id='outlined-required' label='PRODUCT NAME' sx={{ width: '50%' }} />
						<TextField
							required
							id='outlined-required'
							label='SELECT CATEGORIES'
							sx={{ width: '50%' }}
						/>
						<TextField required id='outlined-required' label='SLUG' />
						<TextField required id='outlined' label='SORT DESCRIPTION' />
						<Box>
							<Typography variant='body1' color='initial'>
								colors
							</Typography>
							<Stack flexDirection='row' gap='8px'>
								<Box sx={{ width: '20px', height: '20px', backgroundColor: 'red.600' }} />
								<Box sx={{ width: '20px', height: '20px', backgroundColor: 'red.600' }} />
								<Box sx={{ width: '20px', height: '20px', backgroundColor: 'red.600' }} />
								<Box sx={{ width: '20px', height: '20px', backgroundColor: 'red.600' }} />
							</Stack>
						</Box>
					</Stack>
				</Box>
			</Box>
		</Container>
	);
};

export default AddProduct;
