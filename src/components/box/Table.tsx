import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, IconButton, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function createData(
	name: number,
	calories: number,
	fat: number,
	carbs: number,
	protein: number,
	task: string,
	color: string,
) {
	return { name, calories, fat, carbs, protein, task, color };
}

const rows = [
	createData(2541, 159, 6.0, 24, 4.0, 'completed', '#00E396'),
	createData(2542, 237, 9.0, 37, 4.3, 'onHold', '#A368BF'),
	createData(2543, 262, 16.0, 24, 6.0, 'onHold', '#A368BF'),
	createData(2544, 305, 3.7, 67, 4.3, 'cancelled', '#FF2828'),
	createData(2545, 356, 16.0, 49, 3.9, 'delayed', '#FEB019'),
];

export default function DenseTable() {
	return (
		<Grid item xs={12} sm={12} md={12} sx={{ overflow: 'auto' }}>
			<TableContainer
				component={Paper}
				sx={{ border: '1px solid #7D767680', borderRadius: '20px' }}
			>
				<Table size='small' aria-label='a dense table'>
					<TableHead>
						<TableRow>
							<TableCell sx={{ fontWeight: 'bold', width: '100px', maxWidth: '90px' }}>
								Order ID
							</TableCell>

							<TableCell align='right' sx={{ fontWeight: 'bold' }}>
								Product Name
							</TableCell>
							<TableCell align='right' sx={{ fontWeight: 'bold' }}>
								Units
							</TableCell>
							<TableCell align='right' sx={{ fontWeight: 'bold' }}>
								Order Date
							</TableCell>
							<TableCell align='right' sx={{ fontWeight: 'bold' }}>
								Order Cost
							</TableCell>
							<TableCell
								align='right'
								sx={{ fontWeight: 'bold', width: '140px', minWidth: '90px' }}
							>
								Status
							</TableCell>
							<TableCell align='right' sx={{ fontWeight: 'bold' }}></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component='th' scope='row'>
									{row.name}
								</TableCell>
								<TableCell align='right' sx={{ color: '#9F9B9B' }}>
									{row.calories}
								</TableCell>
								<TableCell align='right' sx={{ color: '#9F9B9B' }}>
									{row.fat}
								</TableCell>
								<TableCell align='right' sx={{ color: '#9F9B9B' }}>
									{row.carbs}
								</TableCell>
								<TableCell align='right' sx={{ color: '#9F9B9B' }}>
									{row.protein}
								</TableCell>
								<TableCell
									align='center'
									sx={{ width: '30px', display: 'flex', flexDirection: 'column', margin: '0 auto' }}
								>
									<Button
										sx={{
											backgroundColor: row.color,
											borderRadius: '20px',
											margin: '0 auto',
											color: 'white',
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
			</TableContainer>
		</Grid>
	);
}
