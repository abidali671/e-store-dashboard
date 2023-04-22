import { useFormik } from 'formik';
import { useState } from 'react';

import API from 'src/axios';
const useSign = () => {
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = async (values: { username: string, password: string, firstName: string, lastName: string, email: string }) => {


        console.log(values, '===values sign up');
        try {
            await API.post('/api/auth/register', {
                username: values.username,
                password: values.password,
                email: values.email,
                first_name: values.firstName,
                last_name: values.lastName,
            })
        } catch (error) {
            setFormErrors(error.response.data)
            console.log(error.response.data);
        }
    };

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: handleSubmit
    });

    return { formik, formErrors };
};

export default useSign;
