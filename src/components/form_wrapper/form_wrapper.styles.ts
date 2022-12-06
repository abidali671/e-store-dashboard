import { SxProps, Theme } from '@mui/material';

export const root: SxProps<Theme> = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	gap: '16px',
	width: '100%',
	maxWidth: '375px',
};
