import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import API from 'src/axios';

const InitialSignUpValues = {
	username: '',
	password: '',

};

const useLogin = () => {
	const navigate = useNavigate()
	const handleSubmit = async (values: typeof InitialSignUpValues & { non_field_error: string }) => {
		try {
			await API.post('/api/auth/login', values);
			navigate('/dashboard');
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

export default useLogin;
