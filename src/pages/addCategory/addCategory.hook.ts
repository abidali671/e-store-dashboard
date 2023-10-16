import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import API from 'src/axios';

const initialValues = {
    name: '',
    slug: '',
    thumbnail: '',
    thumbnailFile: '',
    description: '',
};
const AddToCategory = () => {

    const navigate = useNavigate()

    const handleSubmit = async (values: typeof initialValues) => {
        try {
            const { thumbnailFile, ...data } = values
            const res = await API.post('/api/category', data);
            API.post(`/api/category/${res.data.id}/thumbnail`, { file: thumbnailFile })
            console.log(res, '===>')
            navigate('/category')


        } catch (error) {
            formik.setErrors(error.response.data);
            console.log(error.response.data)
        }

    };

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
    });

    return { formik };
};

export default AddToCategory;
