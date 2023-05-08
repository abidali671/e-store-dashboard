import React from 'react';
import { Container, Breadcrumbs } from '@components';
import { Box, Typography, Button, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import * as styles from './vendorProfile.styles';
import ProfileImage from '@assests/profile.png';

const VendorProfile = () => {
	const { id } = useParams();

	return (
		<Container>
			<Typography variant='h5' fontWeight='bold'>
				Vendor Profile
			</Typography>
			<Breadcrumbs />

			<Box sx={styles.gridBox}>
				<Box sx={{ gridColumn: 'span 3' }}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							p: 3,
							borderRight: '1px solid',
							borderColor: 'gray.100',
						}}
						gap={3}
					>
						<Box textAlign='center'>
							<Box
								component='img'
								src={ProfileImage}
								sx={{ width: '110px', height: '100px', borderRadius: '50%' }}
							/>
							<Typography variant='body1' color='initial' fontSize={16} fontWeight={600}>
								Riley Reid
							</Typography>
							<Typography variant='body1' color='initial' fontSize={16}>
								rileyreid@gmail.com
							</Typography>
						</Box>

						<Button
							variant='contained'
							size='medium'
							sx={{ backgroundColor: 'blue.400', borderRadius: '20px' }}
						>
							Follow
						</Button>

						<Stack gap={2} textAlign='center' flexDirection='row' justifyContent='space-around'>
							<Box>
								<Typography variant='body1' color='gray.400' fontWeight={600} fontSize={16}>
									1733
								</Typography>
								<Typography variant='body1' color='gray.300' fontSize={16}>
									Friends
								</Typography>
							</Box>
							<Box>
								<Typography variant='body1' color='gray.400' fontWeight={600} fontSize={16}>
									1733
								</Typography>
								<Typography variant='body1' color='gray.300' fontSize={16}>
									Followers
								</Typography>
							</Box>
							<Box>
								<Typography variant='body1' color='gray.400' fontWeight={600} fontSize={16}>
									1733
								</Typography>
								<Typography variant='body1' color='gray.300' fontSize={16}>
									Following
								</Typography>
							</Box>
						</Stack>
					</Box>
				</Box>
				<Box sx={{ gridColumn: 'span 9' }}>dear</Box>
			</Box>
		</Container>
	);
};

export default VendorProfile;
