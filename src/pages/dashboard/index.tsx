import React,{useState,useEffect} from 'react';
import { Navbar, Sidebar, View } from '@components';
import { Box } from '@mui/material';

const Dashboard = () => {
	const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false);
	const [width, setWidth]   = useState<number>(window.innerWidth);
	const updateDimensions = () => {
		setWidth(window.innerWidth);
	}
	useEffect(() => {
		window.addEventListener('resize', updateDimensions);
		return () => window.removeEventListener('resize', updateDimensions);
	}, []);
	const toggleSidebar = () => {
		setIsCollapsed(!isCollapsed);
	};
	console.log(width)
	return (
		<Box
			sx={{
				height: '100vh',
				width: '100%',
				display: 'grid',
				gridTemplateRows: '60px 1fr',
				gridTemplateColumns: '1fr',
			}}
		>
			<Box>
				<Navbar />
			</Box>
			<Box
				sx={{
					display: 'grid',
					// width:'60px',
					gridTemplateColumns: `${width == 500 || isCollapsed ? 60 : 300}px 1fr`,
					transition: '0.5s',
					overflowX: 'hidden',
				}}
			>
				<Sidebar isCollapsed={isCollapsed} width={width}  toggleSidebar={toggleSidebar} />
				<View />
			</Box>
		</Box>
	);
};

export default Dashboard;


