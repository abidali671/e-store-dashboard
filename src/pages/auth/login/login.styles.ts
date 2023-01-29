import { SxProps, Theme } from '@mui/material';

export const root: SxProps<Theme> = {
	width: 'auto',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-start',
	flexDirection: 'column',
	margin: '100px',
	textAlign: 'center',
};
export const button: SxProps<Theme> = {
	backgroundColor:'black',
	width:'140px',
	borderRadius:'30px',
	height:'40px',
	color:'#fff',
	fontSize:'12px',
	'&:hover': {
		backgroundColor:'white',
		color:'black'
	  },
}