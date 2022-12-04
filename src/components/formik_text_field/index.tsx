import { TextField } from '@mui/material';
import { FormikValues } from 'formik';
import React from 'react';

type ComponentT = React.FC<FormikValues>;

const FormikTextField: ComponentT = (props) => {
	const {
		sx,
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
		<TextField
			placeholder={placeholder}
			label={label}
			variant='outlined'
			name={name}
			value={values[name]}
			onChange={handleChange}
			error={touched[name] && Boolean(errors[name])}
			helperText={touched[name] && errors[name]}
			sx={{ ...sx }}
			InputProps={InputProps}
			InputLabelProps={InputLabelProps}
			type={type}
			multiline={multiline}
			minRows={minRows}
		/>
	);
};

export default FormikTextField;
