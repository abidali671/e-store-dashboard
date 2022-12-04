// .inputRounded .MuiOutlinedInput-root {

// }

// .flex-form {
// 	text-align: center;
// }
// .signIn-img {
// 	width: 100%;
//   object-fit: cover;
// }
// .main-signIn {
// 
// }
// @media (max-width: 500px) {
// 	.signIn-img {
// 		display: none;
// 	}
// 	.flex-form {
// 		/* height: 100vh; */
// 		justify-content: center;
// 	}
// }
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
export const image: SxProps<Theme> = {
	width: '100%',
	objectFit: 'cover',
	'@media screen and (max-width: 600px)': {
		display:'none'
	  },
};
export const textField: SxProps<Theme> = {
	
	width: '100%',
	marginbottom: '10px',
	'& .MuiOutlinedInput-root':{
		borderRadius: '50px !important',
	}
};

