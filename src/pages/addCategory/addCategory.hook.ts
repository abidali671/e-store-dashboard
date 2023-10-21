import { useFormik } from 'formik';
import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';

import API from 'src/axios';

const initialValues = {
	name: '',
	slug: '',
	thumbnail: '',
	thumbnailFile: '',
	description: '',
};
const useAddCategory = () => {
	const navigate = useNavigate();

	const handleSubmit = async (values: typeof initialValues) => {
		try {
			const { thumbnailFile, ...data } = values;
			const res = await API.post('/api/category', data);
			await API.post(
				`/api/category/${res.data.id}/thumbnail`,
				{ file: thumbnailFile },
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				},
			);

			navigate('/category');
		} catch (error) {
			formik.setErrors(error.response.data);
			console.log(error.response.data);
		}
	};

	const formik = useFormik({
		initialValues: initialValues,
		onSubmit: handleSubmit,
	});

	const onDrop = useCallback((acceptedFiles: Blob[]) => {
		formik.setFieldValue('thumbnail', URL.createObjectURL(acceptedFiles[0]));
		formik.setFieldValue('thumbnailFile', acceptedFiles[0]);
	}, []);

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		multiple: false,
	});

	const updateSlug = (categoryTitle: string) => {
		const updatedSlug = categoryTitle.toLowerCase().replace(/ /g, '-');
		formik.setFieldValue('slug', updatedSlug);
	};

	useEffect(() => {
		updateSlug(formik.values.name);
	}, [formik.values.name]);

	return { formik, getRootProps, getInputProps };
};

export default useAddCategory;
