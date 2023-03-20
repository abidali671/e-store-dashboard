import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Grid, IconButton, Button, Box, Typography, TextField, MenuItem } from '@mui/material';
import UsePagination from './pagination';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { rows } from './box.data';

export default function DenseTable() {
	return (
		<Grid item xs={12} sm={12} md={12}>
			<TableContainer sx={{ border: '1px solid #D9D9D9', borderRadius: '20px', boxShadow: 'none' }}>
				<Table size='small' aria-label='a dense table'>
					<TableHead>
						<TableRow sx={{ flex: '1' }}>
							<TableCell sx={{ fontWeight: 'bold' }}>Order ID</TableCell>

							<TableCell align='center' sx={{ fontWeight: 'bold', width: '40ch' }}>
								Product Name
							</TableCell>
							<TableCell align='center' sx={{ fontWeight: 'bold' }}>
								Units
							</TableCell>
							<TableCell align='center' sx={{ fontWeight: 'bold' }}>
								Order Date
							</TableCell>
							<TableCell align='center' sx={{ fontWeight: 'bold' }}>
								Order Cost
							</TableCell>
							<TableCell align='center' sx={{ fontWeight: 'bold' }}>
								Status
							</TableCell>
							<TableCell align='right' sx={{ fontWeight: 'bold' }}></TableCell>
							<TableCell align='right' sx={{ fontWeight: 'bold' }}></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component='th' scope='row'>
									{row.name}
								</TableCell>
								<TableCell align='center' sx={{ color: '#9F9B9B' }}>
									{row.calories}
								</TableCell>
								<TableCell align='center' sx={{ color: '#9F9B9B' }}>
									{row.fat}
								</TableCell>
								<TableCell align='center' sx={{ color: '#9F9B9B' }}>
									{row.carbs}
								</TableCell>
								<TableCell align='center' sx={{ color: '#9F9B9B' }}>
									{row.protein}
								</TableCell>
								<TableCell align='center'>
									<Button
										sx={{
											backgroundColor: row.color,
											borderRadius: '20px',

											color: 'white !important',
											fontSize: '10px',

											':hover': { backgroundColor: row.color },
										}}
										variant='text'
									>
										{row.task.toUpperCase()}
									</Button>
								</TableCell>
								<TableCell>
									<IconButton aria-label='expand row' size='small'>
										<MoreVertIcon />
									</IconButton>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<Box
					sx={{
						display: 'flex',
						justifyContent: { md: 'space-between', sm: 'center' },
						gap: '5px',
						alignItems: 'center',
						px: 2,
						py: 1,
						flexWrap: 'wrap',
					}}
				>
					<Box>
						<Typography variant='caption' color='#9F9B9B'>
							Showing 1 to 20 of 88 entries
						</Typography>
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'center', overflow: 'hidden', color: '#9F9B9B' }}>
						<Typography variant='h6' fontSize={16} color='inherit'>
							Show
						</Typography>
						<TextField
							sx={{
								'.MuiInputBase-root': {
									height: '30px',
									borderRadius: '40px',
									border: '1px solid #D9D9D9',
								},
								width: '80px',
								display: 'flex',
								mx: 2,
							}}
							id='outlined-select-currency'
							select
							defaultValue='20'
						>
							<MenuItem key={1} value={20}>
								20
							</MenuItem>
						</TextField>
						<Typography variant='h6' fontSize={16} color='#9F9B9B'>
							Entries
						</Typography>
					</Box>
					<Box>
						<UsePagination />
					</Box>
				</Box>
			</TableContainer>
		</Grid>
	);
}
