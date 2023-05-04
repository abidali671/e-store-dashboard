import { Box, SxProps } from '@mui/material';
import * as styles from './form_wrapper.styles';
import * as types from './form_wrapper.types';

const FormWrapper: types.ComponentT = ({ children, onSubmit, sx }: types.PropsT) => {
	return (
		<Box component='form' onSubmit={onSubmit} sx={{ ...styles.root, ...sx } as SxProps}>
			{children}
		</Box>
	);
};

export default FormWrapper;
