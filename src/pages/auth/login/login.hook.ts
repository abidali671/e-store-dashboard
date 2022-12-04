import { useFormik } from 'formik';
import * as yup from 'yup';

const useLogin = () => {
	const validationSchema = yup.object({
		email: yup.string().email('Enter a valid email').required('Email is required'),
		password: yup
			.string()
			.min(8, 'Password should be of minimum 8 characters length')
			.required('Password is required'),
	});

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return { formik };
};

export default useLogin;
