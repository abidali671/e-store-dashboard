import { SxProps, Theme } from '@mui/material';

export const root: SxProps<Theme> = {
	minHeight: '100vh',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
};

export const coverImg: SxProps<Theme> = {
	width: '100%',
	height: '100%',
	objectFit: 'cover',
};
