import { SxProps, Theme } from '@mui/material';

export const Container: SxProps<Theme> = { display: 'flex', flexDirection: 'column', gap: '32px' }

export const itemCard: SxProps<Theme> = {
	p: 2,
	border: '1px solid #D9D9D9',
	borderRadius: '16px',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
};

export const cardTitle: SxProps<Theme> = {
	color: 'black',
	fontWeight: 'bold',
};

