import React from 'react';
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Breadcrumbs = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const pathnames = pathname.split('/').filter(Boolean);

	return (
		<MUIBreadcrumbs aria-label='breadcrumb' separator={<NavigateNextIcon fontSize='small' />}>
			{pathnames.length ? (
				<Link sx={{ textDecoration: 'none', cursor: 'pointer' }} onClick={() => navigate('/')}>
					HOME
				</Link>
			) : (
				<Typography> HOME </Typography>
			)}
			{pathnames.map((name, index) => {
				const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
				const isLast = index === pathnames.length - 1;
				return isLast ? (
					<Typography key={name}>{name}</Typography>
				) : (
					<Link key={name} onClick={() => navigate(routeTo)}>
						{name}
					</Link>
				);
			})}
		</MUIBreadcrumbs>
	);
};

export default Breadcrumbs;
