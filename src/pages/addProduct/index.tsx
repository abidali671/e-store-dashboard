import React, { useCallback, useState } from 'react';
import Container from '@components/container';
import { Box, Stack, Typography, TextField, Checkbox } from '@mui/material';
import { useSelector } from 'src/hooks';
import { useDropzone } from 'react-dropzone';

import * as styles from './addproduct.styles';

const AddProduct: React.FC = () => {
	const [uploadMultipleImages, setUploadMultipleImages] = useState([]);
	const sizes = useSelector((state) => state.dropdowns.sizes);

	const onDrop = useCallback(
		(acceptedFiles) => {
			const img_list = uploadMultipleImages;

			acceptedFiles.forEach((file) => {
				img_list.push(URL.createObjectURL(file));
			});

			setUploadMultipleImages(img_list);
		},
		[uploadMultipleImages],
	);

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
	});

	return (
		<Container>
			<Typography variant='h5' fontWeight='bold'>
				Products
			</Typography>
			<Box sx={styles.mainBox}>
				<Box sx={styles.gridBox}>
					<Box gridColumn={{ lg: 'span 4', xs: 'span 12' }}>
						<Box sx={styles.leftSideImage} {...getRootProps()}>
							<input {...getInputProps()} type='file' />
							{uploadMultipleImages?.[0] ? (
								<Box
									component='img'
									src={uploadMultipleImages[0]}
									sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
								/>
							) : (
								<Box textAlign='center'>
									<Typography variant='h2' fontWeight='bold' textAlign='center' color='gray.500'>
										765 x 850
									</Typography>
									<Typography variant='caption' color='gray.100'>
										Please Choose Image According to Aspected Ratio
									</Typography>
								</Box>
							)}
						</Box>

						<Box sx={styles.mainSmallBoxes} {...getRootProps({ className: 'dropzone' })}>
							{Array(5)
								.fill('')
								.map((_, index) => uploadMultipleImages[index + 1] || '')
								.map((image, index) => (
									<Box key={index} sx={styles.smallBoxes}>
										{image ? (
											<Box
												key={index}
												component='img'
												src={image}
												sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
											/>
										) : (
											<>
												<input {...getInputProps()} type='file' />
												<Typography
													variant='body2'
													fontWeight='bold'
													textAlign='center'
													color='gray.500'
												>
													750 x 850
												</Typography>
											</>
										)}
									</Box>
								))}
						</Box>
					</Box>

					<Stack gridColumn={{ xs: 'span 12', md: 'span 8' }} sx={{ width: '100%', gap: '20px' }}>
						<TextField required id='outlined-required' label='PRODUCT NAME' sx={{ width: '50%' }} />
						<TextField
							required
							id='outlined-required'
							label='SELECT CATEGORIES'
							sx={{ width: '50%' }}
						/>
						<TextField required id='outlined-required' label='SLUG' />
						<TextField required id='outlined' label='SORT DESCRIPTION' />
						<Stack justifyContent='space-between' flexDirection='row' alignItems='center'>
							<Box>
								<Typography variant='body1' fontSize={20} color='gray.300'>
									COLORS
								</Typography>
								<Stack flexDirection='row' gap='8px' pt={1}>
									<Box sx={styles.colorBox} />
									<Box sx={styles.colorBox} />
									<Box sx={styles.colorBox} />
									<Box sx={styles.colorBox} />
								</Stack>
							</Box>
							<Box>
								<Typography variant='body1' fontSize={20} color='gray.300'>
									SIZE
								</Typography>
								<Stack flexDirection='row' pt={0.5}>
									{sizes.map((val, ind) => (
										<Typography variant='body1' color='gray.300' key={ind}>
											<Checkbox defaultChecked={false} size='small' sx={{ padding: '0px 5px' }} />
											{val}
										</Typography>
									))}
								</Stack>
							</Box>
						</Stack>
						<Stack flexDirection='row' gap={3}>
							<TextField required id='outlined-required' label='PRICE' sx={{ width: '50%' }} />
							<TextField required id='outlined-required' label='QUANTITY' sx={{ width: '50%' }} />
						</Stack>
						<TextField
							id='outlined-multiline-static'
							label='Full Details'
							multiline
							rows={4}
							defaultValue=''
						/>
						<TextField required id='outlined-required' label='PRODUCT TAGS' />
					</Stack>
				</Box>
			</Box>
		</Container>
	);
};

export default AddProduct;
