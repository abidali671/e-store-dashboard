import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, OutlinedInput, TextField } from '@mui/material';
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
	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event: any) => {
		event.preventDefault();
	};

	return (
		<OutlinedInput
			placeholder={placeholder}
			// variant='none'/
			name={name}
			value={values[name]}
			onChange={handleChange}
			error={touched[name] && Boolean(errors[name])}
			// helperText={touched[name] && errors[name]}
			sx={{ borderRadius: '30px', border: '1px solid #8A86864D', height: '46px', my: '4px' }}
			// InputProps={InputProps}
			// InputLabelProps={InputLabelProps}

			multiline={multiline}
			minRows={minRows}
			fullWidth
			type={type == 'password' ? (showPassword ? 'text' : 'password') : type}
			endAdornment={
				<InputAdornment position='end'>
					{type == 'password' ? (
						<IconButton
							aria-label='toggle password visibility'
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
							edge='end'
						>
							{showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					) : null}
				</InputAdornment>
			}
		/>
	);
};

export default FormikTextField;
