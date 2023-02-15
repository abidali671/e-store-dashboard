import * as React from 'react';
import Box from '@mui/material/Box';
import Face from '@assests/face.png';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import { Phone, Message } from '@assests/icons';

export default function BoxLayout() {
	return (
		<Box
			sx={{
				display: 'grid',
				width: '100%',
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
				<Box key={index}>
					<Box sx={{ border: '1px solid #ECECEC', borderRadius: '20px', textAlign: 'center' }}>
						<Box component='img' sx={{ maxWidth: '100%', width: '70%' }} src={Face} />
						<Box sx={{ textAlign: 'center' }}>
							<Typography variant='h6' fontWeight={600} my={1}>
								Alex Johnson
							</Typography>
							<Stack direction='row' alignItems='center' justifyContent='center' gap={1}>
								<Phone />
								<Typography variant='h6' fontSize={14} fontWeight={300} color='#9F9B9B'>
									+91 394-5454-2861
								</Typography>
							</Stack>

							<Stack direction='row' alignItems='center' gap={1} my={1} justifyContent='center'>
								<Message />
								<Typography variant='h6' fontSize={14} fontWeight={300} color='#9F9B9B'>
									example@gmail.com
								</Typography>
							</Stack>
						</Box>
						<Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
							<Box>
								<Button
									sx={{
										display: 'block',
										backgroundColor: '#CCCCCC',
										borderRadius: '20px',
										padding: '3px',
										fontSize: '12px',
										color: 'black',
										textTransform: 'capitalize',
									}}
									variant='text'
								>
									Items
								</Button>
								<Typography variant='caption' color='initial'>
									83
								</Typography>
							</Box>
							<Box>
								<Button
									sx={{
										backgroundColor: '#CCCCCC',
										display: 'block',
										borderRadius: '20px',
										padding: '3px',
										fontSize: '12px',
										color: 'black',
										textTransform: 'capitalize',
									}}
									variant='text'
								>
									Sells
								</Button>
								<Typography variant='caption' color='initial'>
									83
								</Typography>
							</Box>
							<Box>
								<Button
									sx={{
										backgroundColor: '#CCCCCC',
										display: 'block',
										borderRadius: '20px',
										padding: '3px',
										fontSize: '12px',
										color: 'black',
										textTransform: 'capitalize',
									}}
									variant='text'
								>
									Payout
								</Button>
								<Typography variant='caption' color='initial'>
									83
								</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			))}
		</Box>
	);
}
