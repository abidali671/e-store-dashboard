import { SxProps, Theme } from '@mui/material';

export const gridBox: SxProps<Theme> = {
	display: 'grid',
	gap: 2,
	gridTemplateColumns: { xs: '1fr', md: '300px 1fr' },
	border: '1px solid',
	borderColor: 'gray.50',
	borderRadius: '10px',
};
export const mainContainer = { display: 'flex', flexDirection: 'column', p: 3, gap: 3 };
export const container = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
};
export const titleBox = { display: 'flex', gap: 3, alignItems: 'center' };
export const leftBox = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	p: 3,
};
export const itemCard: SxProps<Theme> = {
	p: 2,
	border: '1px solid',
	borderColor: 'gray.50',
	borderRadius: '16px',
	display: 'flex',
	flex: '1 0 160px',
	justifyContent: 'space-between',
	alignItems: 'center',
};

export const cardTitle: SxProps<Theme> = {
	color: 'black',
	fontWeight: 'bold',
};
