import { Components } from '@mui/material';
import palette from '../palette/index';

const components: Components = {
	MuiOutlinedInput: {
		styleOverrides: {
			root: {
				borderRadius: '8px',
				border: '1px solid',
				borderColor: palette.gray[50],
				height: '48px',
			},
		},
		variants: [
			{
				props: { size: 'small' },
				style: {
					height: '36px',
					fontSize: '14px',
					maxHeight: '36px',
				},
			},
			{
				props: { multiline: true },
				style: {
					height: 'auto',
				},
			},
		],
	},
	MuiTableRow: {
		styleOverrides: {
			root: {
				height: '60px',
				'&:nth-child(odd) ': {
					backgroundColor: palette.gray[50],
				},
			},
		},
	},
	MuiTableCell: {
		styleOverrides: {
			root: {
				textAlign: 'center',
				padding: '0',
				border: 'none',
			},
		},
	},

	MuiTableHead: {
		styleOverrides: {
			root: {
				'.MuiTableCell-root': {
					textAlign: 'center',
					fontWeight: 'bold',
					whiteSpace: 'nowrap',
					height: '60px',
				},
			},
		},
	},
	MuiButton: {
		variants: [
			{
				props: { color: 'secondary' },
				style: {
					backgroundColor: palette.gray[900],
					color: palette.gray[50],
					'&:hover': {
						backgroundColor: palette.gray[50],
						color: palette.gray[900],
					},
				},
			},
		],
	},
	MuiLink: {
		styleOverrides: {
			root: {
				textDecoration: 'none',
				fontWeight: '600',
				color: palette.blue[300],
				transition: '0.25s',
				'&:hover': {
					opacity: 0.8,
				},
			},
		},
	},
};

export default components;
