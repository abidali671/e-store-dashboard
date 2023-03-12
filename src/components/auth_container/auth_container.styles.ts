import { SxProps, Theme } from '@mui/material';

export const root: SxProps<Theme> = {
	height: '100%',
	display: 'grid',
	gridTemplateRows: '60px auto',
};

export const coverImg: SxProps<Theme> = {
	width: '70%',
	display: { md: 'block', xs: 'none' },
};

