import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Face from '@assests/face.png';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { Phone, Message } from '@assests/icons';
const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'center',
	boxShadow: 'none',
	color: theme.palette.text.secondary,
}));

export default function BoxLayout() {
	return (
		<Box
			sx={{
				display: 'grid',
				border: '1px solid #ECECEC',
				borderRadius: '20px',
				gridTemplateColumns: {
					lg: 'repeat(4, 1fr)',
					md: 'repeat(3, 1fr)',
					sm: 'repeat(2, 1fr)',
					xs: '1fr',
				},
				gap: 3,
				p: 3,
			}}
		>
			{Array.from(Array(6)).map((_, index) => (
				<Box key={index} textAlign='center'>
					<Box
						p={3}
						sx={{ border: '1px solid #ECECEC', borderRadius: '20px', textAlign: 'center' }}
					>
						<Box component='img' sx={{ maxWidth: '100%', width: '70%' }} src={Face} />
						<Box sx={{ textAlign: 'center' }}>
							<Typography variant='h6' fontWeight={600} my={1}>
								Alex Johnson
							</Typography>
							<Stack direction='row' alignItems='center' gap={1}>
								<Phone />
								<Typography variant='h6' fontSize={14} fontWeight={300} color='#9F9B9B'>
									+91 394-5454-2861
								</Typography>
							</Stack>

							<Stack direction='row' alignItems='center' gap={1} my={1}>
								<Message />
								<Typography variant='h6' fontSize={14} fontWeight={300} color='#9F9B9B'>
									example@gmail.com
								</Typography>
							</Stack>
						</Box>
					</Box>
				</Box>
			))}
		</Box>
	);
}
