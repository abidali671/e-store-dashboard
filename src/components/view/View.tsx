import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ViewDetails, ViewDetailsT } from '../../data/app.data';
import Typography from '@mui/material/Typography';
import Box1 from '../box/Box1';
import { DenseTable, RowTable } from '../../components';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	border: '1px solid #D9D9D9',
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
		<Box sx={{ flexGrow: 1 }}>
			<Grid container  spacing={{ xs: 2, md: 2 }} columns={{ xs: 6, sm: 6, md: 12 }}>
				{ViewDetails.map((item: ViewDetailsT, index) => {
					return (
						<Grid item xs={6} sm={3} md={3} key={index}>
							<Item>
								<Box>
									<Typography variant='h5' sx={{ color: 'black', fontWeight: 'bold' }}>
										{item.title}
									</Typography>
									<Typography variant='caption'>{item.info}</Typography>
								</Box>

								{item?.icon && <item.icon />}
							</Item>
						</Grid>
					);
				})}

				<Box1 />
				<DenseTable />
				<RowTable />
			</Grid>
		</Box>
	);
};

export default View;
