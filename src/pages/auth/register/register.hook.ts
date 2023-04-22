import { useFormik } from 'formik';
import API from 'src/axios';

const useSign = () => {
	const handleSubmit = async (values: {
		username: string;
		password: string;
		firstName: string;
		lastName: string;
		email: string;
	}) => {
		try {
			await API.post('/api/auth/register', {
				username: values.username,
				password: values.password,
				email: values.email,
				first_name: values.firstName,
				last_name: values.lastName,
			});
		} catch (error) {
			formik.setErrors(error.response.data);
		}
	};

	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
			firstName: '',
			lastName: '',
			email: '',
		},
		onSubmit: handleSubmit,
	});

	return { formik };
};

export default useSign;
