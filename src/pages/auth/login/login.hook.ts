import { useFormik } from 'formik';
import validationSchema from './login.schema';
import { FormValues } from './login.types';
import { useDispatch } from 'react-redux';
import { login } from '../../../features/auth/auth.slice';
import { useNavigate } from 'react-router-dom';
const useLogin = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const handleSubmit = (values: FormValues) => {
		dispatch(login(JSON.stringify(values.email)))
		navigate('/dashboard')
	};

	const formik = useFormik({
		validationSchema,
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: handleSubmit
	});

	return { formik };
};

export default useLogin;
