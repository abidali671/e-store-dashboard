import { SxProps, Theme } from '@mui/material';

export const root: SxProps<Theme> = {
	background: '#FFF',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	px: { xs: '20px', sm: '40px', md: '60px' },
	borderBottom: '1px solid',
	borderColor: 'gray.50',
	height: '60px',
};
export const pageWrapper = (isCollapsed: boolean) =>
	({
		display: { md: 'none', xs: 'flex' },
		gridTemplateColumns: { md: `${isCollapsed ? 60 : 300}px 1fr`, xs: '10px 1fr' },
		transition: '0.5s',
		overflowX: 'hidden',
	} as SxProps);
