import { useFormik } from 'formik';
import { FormValues } from './login.types';
import { useDispatch } from 'react-redux';
import { login } from '../../../features/auth/auth.slice';
import { useNavigate } from 'react-router-dom';
import API from 'src/axios';
const useLogin = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleSubmit = async (values: { username: string, password: string }) => {
		// dispatch(login(JSON.stringify(values.email)))
		// navigate('/dashboard')
		console.log(values, '===values');
		try {
			await API.post('/api/auth/login', {
				username: values.username,
				password: values.password,
			})
		} catch (error) {
			console.log(error.response);
		}
	};

	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
		},
		onSubmit: handleSubmit
	});

	return { formik };
};

export default useLogin;
