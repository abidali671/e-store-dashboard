import {Navbar,SideList} from '../../components/index';
import { Box, Grid } from '@mui/material';
const Dashboard = () => {
	return (
		<Box
			sx={{
				height: '100vh',
				width: '100%',
				display: 'grid',
				gridTemplateRows: '80px 1fr',
				gridTemplateColumns: '1fr',
			}}
		>
			<Box sx={{ background: 'red' }}>
				<Navbar />
			</Box>
			<Box sx={{ display: 'grid', gridTemplateColumns: '300px 1fr' }}>
				<Box sx={{ background: 'blue' }}>
					<SideList />
				</Box>
				<Box sx={{ background: 'green' }}></Box>
			</Box>
		</Box>
	);
};

export default Dashboard;
