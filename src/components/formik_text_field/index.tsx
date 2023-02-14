import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
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
	} = props;
	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event: any) => {
		event.preventDefault();
	};

	return (
		<OutlinedInput
			placeholder={placeholder}
			name={name}
			value={values[name]}
			onChange={handleChange}
			error={touched[name] && Boolean(errors[name])}
			sx={{ borderRadius: '30px', border: '1px solid #8A86864D', height: '46px', my: '4px' }}

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
