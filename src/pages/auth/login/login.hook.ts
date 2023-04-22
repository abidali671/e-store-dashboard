import { useFormik } from 'formik';
import API from 'src/axios';

const useLogin = () => {
	const handleSubmit = async (values: { username: string; password: string }) => {
		try {
			await API.post('/api/auth/login', {
				username: values.username,
				password: values.password,
			});
		} catch (error) {
			console.log(error.response);
		}
	};

	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
		},
		onSubmit: handleSubmit,
	});

	return { formik };
};

export default useLogin;
