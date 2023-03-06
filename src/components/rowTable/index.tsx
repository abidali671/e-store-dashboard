import React from 'react';

import { Grid, Box, Paper, Typography, IconButton } from '@mui/material';
import { Update } from '@assests/icons';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ProductTable from './productTable';
import styled from '@emotion/styled';
import { productDetail } from '../../data/app.data';
import Shoes from '@assests/shoes.png';
const RowTable = () => {
	const Item = styled(Paper)(({ theme }) => ({
		border: '1px solid #D9D9D9',
		textAlign: 'left',
		borderRadius: '15px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		boxShadow: 'none',
	}));
	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				ml: 1.5,
				pt: 3,
			}}
		>
			<Grid container spacing={{ xs: 2, md: 1 }}>
				<Grid item xs={12} md={6}>
					<ProductTable />
				</Grid>
				<Grid item xs={12} md={6}>
					<Item>
						<Box sx={{ width: '100%', p: 0 }}>
							<Box
								p={1.3}
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									borderBottom: '1px solid #D9D9D9',
								}}
							>
								<Typography fontWeight='bold' variant='body2' color='inherit'>
									TOP SALLING PRODUCTS
								</Typography>
								<Box>
									<IconButton aria-label='expand row' size='small' sx={{ p: 0 }}>
										<Update />
									</IconButton>

									<IconButton aria-label='expand row' size='small' sx={{ p: 0 }}>
										<MoreVertIcon />
									</IconButton>
								</Box>
							</Box>
							<Box>
								{productDetail.map((product, ind) => (
									<Box sx={{ display: 'flex', p: 1, backgroundColor: 'green' }} key={ind}>
										<Box component='img' src={require(`@assests/${product.img}.png`)} width={110} />
										<Box px={1}>
											<Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
												<Typography variant='h6' fontWeight='bold' fontSize={14} color='initial'>
													{product.title}
												</Typography>
												<Typography variant='h6' fontWeight={400} fontSize={12} color='gray.300'>
													{product.sales} Sales
												</Typography>
											</Box>

											<Typography
												variant='subtitle1'
												fontWeight={400}
												sx={{ lineHeight: '15px', pt: 1, fontSize: { md: '14px', xs: '12px' } }}
												color='gray.300'
											>
												{product.desc}
											</Typography>
											<Typography
												variant='h6'
												pt={1}
												fontSize={14}
												fontWeight={600}
												color='initial'
											>
												${product.price}
											</Typography>
										</Box>
									</Box>
								))}
							</Box>
						</Box>
					</Item>
				</Grid>
			</Grid>
		</Box>
	);
};

export default RowTable;
