import { SxProps, Theme } from '@mui/material';

export const root: SxProps<Theme> = {
	width: 'auto',
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
	textAlign: 'center',
	height: '100%',
};
export const button: SxProps<Theme> = {
	backgroundColor: 'black',
	width: '100%',
	borderRadius: '30px',
	height: '40px',
	color: '#fff',
	fontSize: '12px',
	'&:hover': {
		backgroundColor: 'white',
		color: 'black',
	},
};
