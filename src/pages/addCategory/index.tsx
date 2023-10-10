import { Container, Card, Breadcrumbs } from '@components';
import { BoxLeft, mainForm, smallBoxes } from './addCategory.styles';
import { useDropzone } from 'react-dropzone';
import { Typography, Grid, Box, FormControl, TextField, Button } from '@mui/material';
import { useCallback, useState } from 'react';
const AddCategory = () => {
    const [uploadMultipleImages, setUploadMultipleImages] = useState([]);

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
    console.log(uploadMultipleImages, 'upload');

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
                    <Card title='Add New Category'>
                        <Box sx={mainForm} component='form'>
                            <Box gap={2} sx={BoxLeft}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <FormControl>
                                        <Typography fontWeight='bold' variant='body1'>
                                            Name
                                        </Typography>

                                        <TextField name='name' placeholder='Please enter your name' />
                                    </FormControl>
                                    <FormControl>
                                        <Typography fontWeight='bold' variant='body1'>
                                            Slug
                                        </Typography>
                                        <TextField name='slug' placeholder='Please enter your slug' />
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
                                    <Box {...getRootProps()} sx={smallBoxes}>
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
                                                    Upload Image
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

                                <TextField
                                    sx={{ '.MuiOutlinedInput-root': { height: 'auto' } }}
                                    multiline
                                    rows={5}
                                />
                            </FormControl>
                            <FormControl>
                                <Box>
                                    <Typography fontWeight='bold' variant='body1'>
                                        Product Tags
                                    </Typography>
                                    <Typography variant='caption' color='initial'>
                                        (type & make a comma to seprate tags)
                                    </Typography>
                                </Box>

                                <TextField />
                                <Button
                                    variant='contained'
                                    sx={{
                                        backgroundColor: 'blue.500',
                                        color: 'white',

                                        width: '120px',
                                        marginTop: '14px',
                                    }}
                                >
                                    Submit
                                </Button>
                            </FormControl>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AddCategory;
