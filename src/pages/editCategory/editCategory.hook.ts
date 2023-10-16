import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import API from 'src/axios';

const initialValues = {
    name: '',
    slug: '',
    description: '',
    id: '',
};
const EditCategoryHook = () => {
    const handleSubmit = async (values: typeof initialValues) => {
        try {
            const { id, ...data } = values
            const res = await API.patch(`/api/category/${id}`, data);
            toast(res.data.msg)
        } catch (error) {
            formik.setErrors(error.response.data);
            console.log(error.response.data);
        }

    };

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
    });

    return { formik };
};

export default EditCategoryHook;
