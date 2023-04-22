import { useFormik } from 'formik';
import API from 'src/axios';

const InitialSignUpValues = {
	username: '',
	password: '',
	first_name: '',
	last_name: '',
	email: '',
};

const useSign = () => {
	const handleSubmit = async (values: typeof InitialSignUpValues) => {
		try {
			await API.post('/api/auth/register', values);
		} catch (error) {
			formik.setErrors(error.response.data);
		}
	};

	const formik = useFormik({
		initialValues: InitialSignUpValues,
		onSubmit: handleSubmit,
	});

	return { formik };
};

export default useSign;
