import { SxProps, Theme } from '@mui/material';

export const root: SxProps<Theme> = {
	height: '100vh',
	display: 'grid',
	gridTemplateRows: '60px 1fr',
};

export const coverImg: SxProps<Theme> = {
	width: '100%',
	height: '100%',
	position: 'absolute',
	objectFit: 'cover',
};

export const imgWrapper: SxProps<Theme> = {
	flex: 1,
	display: { md: 'block', xs: 'none' },
	width: '100%',
	height: '100%',
	background: 'red',
	position: 'relative',
};

export const contentWrapper: SxProps<Theme> = {
	justifyContent: { md: 'space-around', sm: 'center' },
	alignItems: 'center',
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
};
