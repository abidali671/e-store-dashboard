import { OutlinedInput, TextField } from '@mui/material';
import { FormikValues } from 'formik';
import React from 'react';

type ComponentT = React.FC<FormikValues>;

const FormikTextField: ComponentT = (props: FormikValues) => {
	const {
	
		name,
		label,
		values,
		errors,
		touched,
		handleChange,
		placeholder,
		InputProps,
		type,
		InputLabelProps,
		multiline,
		minRows,
	} = props;

	return (
		<OutlinedInput
			placeholder={placeholder}
			// variant='none'/
			name={name}
			value={values[name]}
			onChange={handleChange}
			error={touched[name] && Boolean(errors[name])}
			// helperText={touched[name] && errors[name]}
			sx={{borderRadius:'30px',border:'1px solid #8A86864D',height:'46px',my:'4px'}}
			// InputProps={InputProps}
			// InputLabelProps={InputLabelProps}
			type={type}
			multiline={multiline}
			minRows={minRows}
			fullWidth
		/>
		
	);
};

export default FormikTextField;
