import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { boxValue, Boxes } from '../../data/app.data';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { experimentalStyled as styled } from '@mui/material/styles';
import { MyChartComponent, AreaChart, ColumnChart } from '@components';

const Box1: React.FC = () => {
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

	return (
		<React.Fragment>
			{boxValue.map((item: Boxes, ind) =>
				item.full ? (
					<Grid item xs={6} sm={6} md={item.md} key={ind}>
						<Item sx={{ padding: 0, width: '100%' }}>
							<Box sx={{ width: '100%' }}>
								<Box p={2} sx={{ borderBottom: '1px solid #7D767680' }}>
									<Typography fontWeight='bold' variant='body2' color='inherit'>
										{item.title}
									</Typography>
								</Box>

								<Box px={2} sx={{ minHeight: '40%', width: '100%' }}>
									<ColumnChart
										userData={[
											{
												name: 'Net Profit',
												data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
											},
											{
												name: 'Revenue',
												data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
											},
											{
												name: 'Free Cash Flow',
												data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
											},
										]}
									/>
								</Box>

								<Stack
									direction='row'
									width='auto'
									px={5}
									py={2}
									justifyContent='flex-start'
									alignItems='center'
									spacing={3}
								>
									{item.subValue?.map((val, ind) => (
										<Box
											key={ind}
											flexDirection='row'
											gap={1}
											alignItems='center'
											sx={{ display: 'flex' }}
										>
											<Box
												sx={{
													width: '10px',
													height: '10px',
													borderRadius: '20px',
												}}
												style={{ backgroundColor: val.color }}
											/>

											<Typography variant='caption' color='inherit'>
												{val.label}
											</Typography>
										</Box>
									))}
								</Stack>
							</Box>
						</Item>
					</Grid>
				) : (
					<Grid item xs={6} sm={6} md={item.md} key={ind}>
						<Item sx={{ padding: 0, height: '99%' }}>
							<Box sx={{ width: '100%', height: '100%' }}>
								<Box p={2} sx={{ borderBottom: '1px solid #7D767680' }}>
									<Typography fontWeight='bold' variant='body2' color='inherit'>
										{item.title}
									</Typography>
								</Box>

								<Box
									px={2}
									sx={{ textAlign: 'center', margin: '0 auto', maxWidth: '100%', height: 'auto' }}
								>
									{item.typeChart ? (
										<MyChartComponent userData={item.data?.map((val) => val)} />
									) : (
										<AreaChart userData={item.data} />
									)}
								</Box>

								{item.bottom && (
									<Box p={3} sx={{ borderTop: '1px solid #7D767680' }}>
										<Typography
											sx={{ color: '#86AAF1' }}
											fontWeight='bold'
											variant='caption'
											color='inherit'
										>
											{item.bottom}
										</Typography>
									</Box>
								)}
							</Box>
						</Item>
					</Grid>
				),
			)}
		</React.Fragment>
	);
};
export default Box1;
