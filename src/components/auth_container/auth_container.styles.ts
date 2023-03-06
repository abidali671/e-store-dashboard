import { SxProps, Theme } from '@mui/material';

export const root: SxProps<Theme> = {
	height:'100vh',
	display: 'grid',
    gridTemplateRows: '60px auto',
};

export const coverImg: SxProps<Theme> = { 
	width:'90%',

	objectFit:'cover',
	display:{md:'block',xs:'none'},
};

