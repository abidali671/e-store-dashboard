import { SxProps, Theme } from '@mui/material';

export const root: SxProps<Theme> = {
	height: '100vh',
	width: '100%',
	display: 'grid',
	gridTemplateRows: '60px 1fr',
	gridTemplateColumns: '1fr',
};

export const pageWrapper = (isCollapsed) =>
({
	display: 'grid',
	gridTemplateColumns: { md: `${isCollapsed.desktop ? 60 : 300}px 1fr`, xs: '1fr' },
	transition: '0.5s',
	overflowX: 'hidden',
} as SxProps);

export const contentWrapper: SxProps<Theme> = { flex: 1, overflowX: 'hidden', padding: { xs: 3, md: 6 } };
