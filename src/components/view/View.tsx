import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ViewDetails } from '../../data/app.data';
import Typography from '@mui/material/Typography';
import Box1 from '../box/Box1';
import { DenseTable } from '../../components';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	border: '1px solid #7D767680',
	textAlign: 'left',
	borderRadius: '15px',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	boxShadow: 'none',
	color: theme.palette.text.secondary,
}));

const View: React.FC = () => {
	return (
		<Box sx={{ flexGrow: 1, padding: 6, pt: 5, overflow: 'auto' }}>
			<Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 6, sm: 6, md: 12 }}>
				{ViewDetails.map((item, index) => {
					const Svgs = item.icon
					return (
						<Grid item xs={6} sm={3} md={3} key={index}>
							<Item>
								<Box>
									<Typography variant='h5' sx={{ color: 'black', fontWeight: 'bold' }}>
										{item.title}
									</Typography>
									<Typography variant='caption'>{item.info}</Typography>
								</Box>

								{/* <Box component='img' sx={{ height: '100%' }} src={item.icon} /> */}
								<Svgs />
							</Item>
						</Grid>
					);
				})}
				<Box1 />
				<DenseTable />
			</Grid>
		</Box>
	);
};

export default View;
