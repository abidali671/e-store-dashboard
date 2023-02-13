import { SxProps, Theme } from '@mui/material';

export const root: SxProps<Theme> = {
	height: '100vh',
	width: '100%',
	display: 'grid',
	gridTemplateRows: '60px 1fr',
	gridTemplateColumns: '1fr',
};

export const pageWrapper = (isCollapsed: boolean) =>
	({
		display: 'grid',
		gridTemplateColumns: { md: `${isCollapsed ? 60 : 300}px 1fr`, xs: '60px 1fr' },
		transition: '0.5s',
		overflowX: 'hidden',
	} as SxProps);

export const contentWrapper: SxProps<Theme> = { flex: 1,overflowX:'hidden' };
