import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Grid, IconButton, Box } from '@mui/material';
import { Update } from '@assests/icons';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { productsRow } from '../box/box.data';
const RowTable = () => {
	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				ml: 1.5,
				pt: 2,
			}}
		>
			<Grid container spacing={{ xs: 2, md: 1 }}>
				<Grid item xs={12} md={6}>
					<TableContainer
						sx={{ border: '1px solid #7D767680', borderRadius: '20px', display: 'flex' }}
					>
						<Table size='small' aria-label='a dense table'>
							<TableHead>
								<TableRow>
									<TableCell sx={{ fontWeight: 'bold' }}>Sold by Item</TableCell>

									<TableCell align='center' sx={{ fontWeight: 'bold' }}>
										{/* dd */}
									</TableCell>

									<TableCell sx={{ display: 'flex', justifyContent: 'flex-end' }}>
										<IconButton aria-label='expand row' size='small'>
											<Update />
										</IconButton>

										<IconButton aria-label='expand row' size='small'>
											<MoreVertIcon />
										</IconButton>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{productsRow.map((row) => (
									<TableRow
										key={row.name}
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
									>
										<TableCell component='th' scope='row'>
											{row.name}
										</TableCell>
										<TableCell align='center' sx={{ color: '#9F9B9B' }}>
											{row.product}
										</TableCell>

										<TableCell sx={{ display: 'flex', justifyContent: 'flex-end' }}>
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
				<Grid item xs={12} md={6}>
				<TableContainer
						sx={{ border: '1px solid #7D767680', borderRadius: '20px', display: 'flex' }}
					>
						<Table size='small' aria-label='a dense table'>
							<TableHead>
								<TableRow>
									<TableCell sx={{ fontWeight: 'bold' }}>Sold by Item</TableCell>

									<TableCell align='center' sx={{ fontWeight: 'bold' }}>
										{/* dd */}
									</TableCell>

									<TableCell sx={{ display: 'flex', justifyContent: 'flex-end' }}>
										<IconButton aria-label='expand row' size='small'>
											<Update />
										</IconButton>

										<IconButton aria-label='expand row' size='small'>
											<MoreVertIcon />
										</IconButton>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{productsRow.map((row) => (
									<TableRow
										key={row.name}
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
									>
										<TableCell component='th' scope='row'>
											{row.name}
										</TableCell>
										<TableCell align='center' sx={{ color: '#9F9B9B' }}>
											{row.product}
										</TableCell>

										<TableCell sx={{ display: 'flex', justifyContent: 'flex-end' }}>
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
			</Grid>
		</Box>
	);
};

export default RowTable;
