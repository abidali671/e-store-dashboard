import { SxProps, Theme } from '@mui/material';

export const image: SxProps<Theme> = {
	width: '100%',
	objectFit: 'cover',
	'@media screen and (max-width: 600px)': {
		display: 'none',
	},
};
