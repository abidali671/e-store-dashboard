import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import API from 'src/axios';

const InitialSignUpValues = {
	username: '',
	password: '',
	first_name: '',
	last_name: '',
	email: '',
};

const useRegister = () => {

	const handleSubmit = async (values: typeof InitialSignUpValues) => {
		try {
			const res = await API.post('/api/auth/register', values);
			console.log('register ', res.data.msg)
			toast.success(res.data.msg)

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

export default useRegister;
