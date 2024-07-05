import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container, Breadcrumbs, Card } from '@components';
import ProfileImage from '@assests/profile.png';
import { Box, Typography, Button, Stack, Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Notifications, userDataCards } from 'src/data/user';
import { Timer } from '@assests/icons';
import * as styles from './UserProfile.styles';

const UserProfile = () => {
	const { id } = useParams();

	return (
		<Container>
			<Typography variant='h5' fontWeight='bold'>
				Vendor Profile
			</Typography>
			<Breadcrumbs pathnames={['Users', 'User detail']} />

			<Box sx={styles.gridBox}>
				{/* Left box  */}
				<Box
					gap={3}
					display='flex'
					flexDirection='column'
					sx={{
						borderRight: { md: '1px solid', xs: 'none' },
						borderColor: { md: 'gray.50', xs: 'none' },
					}}
				>
					<Box sx={styles.leftBox} gap={3}>
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

					<Divider variant='middle' />
					<Stack sx={{ textAlign: 'center', p: 3, gap: 3 }}>
						<Stack gap={2}>
							<Typography variant='h1' fontSize={20} fontWeight={600} color='initial'>
								Contact Information
							</Typography>
							<Stack textAlign='left'>
								<Typography variant='body1' fontSize={16} fontWeight={400} color='gray.400'>
									Email Address
								</Typography>
								<Typography variant='body1' fontSize={16} fontWeight={400} color='gray.400'>
									rileyreid@gmail.com
								</Typography>
							</Stack>
							<Stack textAlign='left'>
								<Typography variant='body1' fontSize={16} fontWeight={400} color='gray.400'>
									Phone Number
								</Typography>
								<Typography variant='body1' fontSize={16} fontWeight={400} color='gray.400'>
									+00 392-264-15641
								</Typography>
							</Stack>
							<Stack textAlign='left'>
								<Typography variant='body1' fontSize={16} fontWeight={400} color='gray.400'>
									Birthday
								</Typography>
								<Typography variant='body1' fontSize={16} fontWeight={400} color='gray.400'>
									Dec-10-1990
								</Typography>
							</Stack>
						</Stack>
						<Stack gap={2}>
							<Typography
								textAlign='left'
								variant='body1'
								fontSize={16}
								fontWeight={600}
								color='gray.400'
							>
								Social Profiles
							</Typography>
							<Stack gap={3} flexDirection='row' justifyContent='flex-start'>
								<FacebookRoundedIcon sx={{ fontSize: '32px' }} />
								<TwitterIcon sx={{ fontSize: '32px' }} />
								<InstagramIcon sx={{ fontSize: '32px' }} />
								<LinkedInIcon sx={{ fontSize: '32px' }} />
							</Stack>
						</Stack>
					</Stack>
				</Box>
				{/* Right box  */}
				<Box p={3} gap={4} display='flex' flexDirection='column'>
					<Stack
						sx={{
							borderBottom: '1px solid',
							borderColor: 'gray.50',
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
						{userDataCards.map((props, ind) => (
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
									<Box sx={styles.titleBox}>
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

export default UserProfile;
