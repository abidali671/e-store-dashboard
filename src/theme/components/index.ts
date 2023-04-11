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
	MuiTableCell: {
		styleOverrides: {
			root: { textAlign: 'center', p: '0px', border: '0px', paddingTop: '0', paddingBottom: '0' }
		}
	},
	MuiTableRow: {
		styleOverrides: {
			root: { height: '60px', borderBottom: '1px solid', borderColor: palette.gray[100] }
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
