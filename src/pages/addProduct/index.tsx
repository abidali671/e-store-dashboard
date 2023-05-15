import React, { useCallback, useState } from 'react';
import Container from '@components/container';
import { Box, Stack, Typography, TextField, Checkbox } from '@mui/material';
import { useSelector } from 'src/hooks';
import { useDropzone } from 'react-dropzone';

import * as styles from './addproduct.styles';
const AddProduct = () => {
	const [uploadImage, setUploadImage] = useState('');
	const sizes = useSelector((state) => state.dropdowns.sizes);
	const onDrop = useCallback(
		(acceptedFiles) => {
			const imageMimeType = ['image', 'png', 'jpg', 'jpeg'];
			acceptedFiles.forEach((file) => {
				if (imageMimeType.includes(file.path.split('.').at(-1))) {
					setUploadImage(URL.createObjectURL(file));
				} else {
					alert('please choose a image');
				}
			});
		},
		[uploadImage],
	);
	const { getRootProps, getInputProps } = useDropzone({ onDrop, multiple: false });
	return (
		<Container>
			<Typography variant='h5' fontWeight='bold'>
				Products
			</Typography>
			<Box sx={styles.mainBox}>
				<Box sx={styles.gridBox}>
					<Box gridColumn={{ md: 'span 4', xs: 'span 12' }}>
						<Box sx={styles.leftSideImage} {...getRootProps()}>
							<input {...getInputProps()} type='file' min={1} />
							{uploadImage ? (
								<Box component='img' src={uploadImage} />
							) : (
								<Box>
									<Typography variant='h2' fontWeight='bold' textAlign='center' color='gray.500'>
										765 x 850
									</Typography>
									<Typography variant='caption' color='gray.100'>
										Please Choose Image According to Aspected Ratio
									</Typography>
								</Box>
							)}
						</Box>

						<Box sx={styles.mainSmallBoxes}>
							{Array(5).fill(
								<Box sx={styles.smallBoxes}>
									<Typography variant='body2' fontWeight='bold' textAlign='center' color='gray.500'>
										750 x 850
									</Typography>
								</Box>,
							)}
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
