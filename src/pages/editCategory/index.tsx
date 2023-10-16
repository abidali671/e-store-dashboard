import { Container, Card, Breadcrumbs, FormikTextField } from '@components';
import { BoxLeft, smallBoxes } from './editCategory.styles';
import { useDropzone } from 'react-dropzone';
import { Typography, Grid, Box, FormControl } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditCategoryHook from './editCategory.hook';
import { LoadingButton } from '@mui/lab';
import API from 'src/axios';

const EditCategory = () => {
    const [uploadMultipleImages, setUploadMultipleImages] = useState([]);
    const { slug } = useParams();
    const { formik } = EditCategoryHook()

    const fetchData = async () => {
        try {
            const res = await API.get(`/api/category/${slug}`);
            formik.setValues(res.data)
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        fetchData()
    }, [slug])

    const onDrop = useCallback(
        (acceptedFiles: Blob[]) => {
            setUploadMultipleImages([URL.createObjectURL(acceptedFiles[0])]);
        },
        [uploadMultipleImages],
    );

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: false,
    });

    return (
        <Container>
            <Box>
                <Typography variant='h5' fontWeight='bold'>
                    Category
                </Typography>
                <Breadcrumbs />
            </Box>
            <Grid container columns={12} spacing={4}>
                <Grid item xs={12} md={12}>
                    <Card title='Edit Category'>
                        <Box
                            component='form'
                            onSubmit={formik.handleSubmit}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                padding: '16px 24px',
                                flexDirection: 'column',
                                gap: '8px',
                            }}
                        >
                            <Box gap={2} sx={BoxLeft}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <FormControl>
                                        <Typography fontWeight='bold' variant='body1'>
                                            Name
                                        </Typography>

                                        <FormikTextField name='name'
                                            {...formik} placeholder='Please enter your name' />
                                    </FormControl>
                                    <FormControl>
                                        <Typography fontWeight='bold' variant='body1'>
                                            Slug
                                        </Typography>
                                        <FormikTextField  {...formik} name='slug' placeholder='Please enter your slug' />
                                    </FormControl>
                                    <Typography variant='caption'>
                                        The “slug” is the URL-friendly version of the name. It is usually all lowercase
                                        and contains only letters, numbers, and hyphens
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography fontWeight='bold' variant='body1'>
                                        Thumbnail
                                    </Typography>
                                    <Box sx={smallBoxes} {...getRootProps()}>
                                        <input {...getInputProps()} type='file' />
                                        {uploadMultipleImages?.[0] ? (
                                            <Box
                                                component='img'
                                                src={uploadMultipleImages[0]}
                                                sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                            />
                                        ) : (
                                            <Box textAlign='center'>
                                                <Typography variant='body1' textAlign='center' color='gray.500'>
                                                    Upload Imag
                                                </Typography>
                                            </Box>
                                        )}
                                    </Box>
                                </Box>
                            </Box>
                            <FormControl>
                                <Typography variant='body1' fontWeight='bold'>
                                    Description
                                </Typography>

                                <FormikTextField
                                    sx={{ '.MuiOutlinedInput-root': { height: 'auto' } }}
                                    multiline
                                    rows={5}
                                    name='description'
                                    {...formik}
                                />
                            </FormControl>
                            <FormControl>
                                <LoadingButton
                                    variant='contained'
                                    sx={{
                                        backgroundColor: 'blue.500',
                                        color: 'white',
                                        width: '120px',
                                        marginTop: '14px',
                                    }}
                                    type='submit'
                                >
                                    Submit
                                </LoadingButton>
                            </FormControl>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default EditCategory;
