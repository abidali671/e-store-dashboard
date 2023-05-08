import React from 'react';
import { Container, Breadcrumbs, Card } from '@components';
import { Box, Typography, Button, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import * as styles from './vendorProfile.styles';
import ProfileImage from '@assests/profile.png';
import { Notifications, vendorDataCards } from 'src/data/vendor';
import { Timer } from '@assests/icons';

const VendorProfile = () => {
	const { id } = useParams();

	return (
		<Container>
			<Typography variant='h5' fontWeight='bold'>
				Vendor Profile
			</Typography>
			<Breadcrumbs pathnames={['Vendors', 'Vendor detail']} />

			<Box sx={styles.gridBox}>
				<Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							p: 3,
							borderRight: { md: '1px solid', xs: 'none' },
							borderColor: { md: 'gray.100', xs: 'none' },
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
				<Box p={3} gap={4} display='flex' flexDirection='column'>
					<Stack
						sx={{
							borderBottom: '1px solid',
							borderColor: 'gray.100',
							flexDirection: 'row',
							gap: 5,
							height: 50,
							alignItems: 'center',
						}}
					>
						<Typography
							variant='body1'
							sx={{ borderBottom: '1px solid ', borderColor: 'blue.400' }}
							fontWeight={600}
							color='gray.400'
						>
							Profile
						</Typography>
						<Typography variant='body1' color='gray.400' fontWeight={600}>
							Settings
						</Typography>
					</Stack>

					<Stack sx={{ flexDirection: 'row', gap: 5, flexWrap: 'wrap' }}>
						{vendorDataCards.map((props, ind) => (
							<Box sx={styles.itemCard} key={ind}>
								<Box>
									<Typography variant='h5' sx={styles.cardTitle}>
										{props.title}
									</Typography>
									<Typography variant='caption'>{props.info}</Typography>
								</Box>
								{props?.icon && <props.icon />}
							</Box>
						))}
					</Stack>

					<Card title='LATEST NOTIFICATION'>
						<Box sx={styles.mainContainer}>
							{Notifications.map((props, ind) => (
								<Box key={ind} sx={styles.container}>
									<Box sx={styles.leftBox}>
										<Box sx={{ background: 'green', p: 3, borderRadius: '10px', opacity: 0.6 }}>
											{props?.icon && <props.icon color='white' />}
										</Box>
										<Stack>
											<Typography variant='body1' fontWeight={600} fontSize={16} color='gray.400'>
												{props.title}
											</Typography>
											<Typography variant='body1' fontSize={14} color='gray.400'>
												{props.info}
											</Typography>
										</Stack>
									</Box>
									<Stack flexDirection='row' gap={1}>
										<Timer />
										<Typography variant='body1' color='gray.400'>
											10:00 AM
										</Typography>
									</Stack>
								</Box>
							))}
						</Box>
					</Card>
				</Box>
			</Box>
		</Container>
	);
};

export default VendorProfile;
