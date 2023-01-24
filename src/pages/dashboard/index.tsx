import React from 'react';
import { Navbar, Sidebar } from '@components';
import { Box } from '@mui/material';

const Dashboard = () => {
	const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false);

	const toggleSidebar = () => {
		setIsCollapsed(!isCollapsed);
	};
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
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: `${isCollapsed ? 60 : 300}px 1fr`,
					transition: '0.5s',
				}}
			>
				<Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
				<Box sx={{ background: 'green' }}></Box>
			</Box>
		</Box>
	);
};

export default Dashboard;
