import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs as MuiBreadcrumbs, Link, Typography } from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { pathnames as Pathnames } from '@types';

interface BreadCrumbsProps {
	pathnames?: string[];
}

const Breadcrumbs = ({ pathnames }: BreadCrumbsProps) => {
	const { pathname } = useLocation();

	const routePathnames = pathname
		.split('/')
		.filter(Boolean)
		.map((path) => path.replace(/-/g, ' '));

	const breadcrumbsList = React.useMemo(() => {
		if (pathnames) return pathnames;
		else return routePathnames;
	}, []);

	return (
		<MuiBreadcrumbs
			sx={{ py: 2 }}
			aria-label='breadcrumb'
			separator={<NavigateNextIcon fontSize='small' />}
		>
			<Link component={RouterLink} to={Pathnames.DASHBOARD}>
				Home
			</Link>
			{breadcrumbsList.map((name, index) => {
				const routeTo = `/${routePathnames.slice(0, index + 1).join('/')}`;
				const isLast = index === routePathnames.length - 1;

				return isLast ? (
					<Typography textTransform='capitalize' key={name}>
						{name}
					</Typography>
				) : (
					<Link component={RouterLink} textTransform='capitalize' key={name} to={routeTo}>
						{name}
					</Link>
				);
			})}
		</MuiBreadcrumbs>
	);
};

export default Breadcrumbs;
