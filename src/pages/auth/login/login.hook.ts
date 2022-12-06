import { useFormik } from 'formik';
import validationSchema from './login.schema';
import { FormValues } from './login.types';

const useLogin = () => {
	const handleSubmit = (values: FormValues) => {
		alert(JSON.stringify(values, null, 2));
	};

	const formik = useFormik({
		validationSchema,
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: handleSubmit,
	});

	return { formik };
};

export default useLogin;
