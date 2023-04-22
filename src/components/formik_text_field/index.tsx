import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { FormikValues } from 'formik';
import React from 'react';

type ComponentT = React.FC<FormikValues>;

const FormikTextField: ComponentT = (props: FormikValues) => {
	const {
		name,
		values,
		errors,
		touched,
		handleChange,
		placeholder,
		type,
		multiline,
		minRows,
		label,
	} = props;
	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
	};

	return (
		<TextField
			label={label}
			placeholder={placeholder}
			name={name}
			value={values[name]}
			onChange={handleChange}
			error={touched[name] && Boolean(errors[name])}
			helperText={errors[name]}
			multiline={multiline}
			minRows={minRows}
			fullWidth
			type={type == 'password' ? (showPassword ? 'text' : 'password') : type}
			InputProps={{
				endAdornment: (
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
				),
			}}
		/>
	);
};

export default FormikTextField;
