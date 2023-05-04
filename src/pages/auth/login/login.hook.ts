import { useFormik } from 'formik';
import API from 'src/axios';
import { login } from 'src/features/auth/auth.slice';
import { useDispatch } from 'src/hooks';


const InitialSignUpValues = {
	username: '',
	password: '',

};

const useLogin = () => {
	const dispatch = useDispatch()
	const handleSubmit = async (values: typeof InitialSignUpValues & { non_field_error: string }) => {
		try {
			await API.post('/api/auth/login', values);
			dispatch(login(values.username))

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
