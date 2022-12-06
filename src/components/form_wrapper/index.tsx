import { Box } from '@mui/material';
import * as styles from './form_wrapper.styles';
import * as types from './form_wrapper.types';

const FormWrapper: types.ComponentT = ({ children }: types.PropsT) => {
	return <Box sx={styles.root}>{children}</Box>;
};

export default FormWrapper;
