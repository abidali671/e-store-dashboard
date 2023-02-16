import { SxProps, Theme } from '@mui/material';
import { url } from 'inspector';

export const root: SxProps<Theme> = {
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	

};

export const coverImg: SxProps<Theme> = {
	width: '70%',
    // maxHeight: '100%',
    padding: 0,
	height:'100%',
    margin: 0,
	objectFit:'cover',
    
  

	display:{md:'inline-flex',xs:'none'},
};

