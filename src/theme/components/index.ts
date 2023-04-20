import { Components } from '@mui/material';
import palette from '../palette/index'


const components: Components = {
	MuiOutlinedInput: {

		styleOverrides: {
			root: {
				borderRadius: '8px',
				border: '1px solid',
				borderColor: palette.gray[100],
				height: '48px',
			},
		},
		variants: [
			{
				props: { size: 'small' },
				style: {
					height: '36px',
					fontSize: '14px',
					maxHeight: '36px'
				},
			},
		],
	},
	MuiTableRow: {
		styleOverrides: {
			root: { height: '60px', border: '1px solid', borderColor: palette.gray[100] }
		}
	},
	MuiTableCell: {
		styleOverrides: {
			root: { textAlign: 'center', p: '0px', padding: '0', }
		}
	},

	MuiTableHead: {
		styleOverrides: {
			root: {
				'.MuiTableCell-root': {
					borderRadius: '20px',
					boxShadow: 'none',
					textAlign: 'center',
					fontWeight: 'bold',
					whiteSpace: 'nowrap',
					height: '60px'
				}
			}
		}
	}
};




export default components;
