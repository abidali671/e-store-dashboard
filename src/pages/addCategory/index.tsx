import { Container, Card } from '@components'
import { mainForm, smallBoxes } from './addCategory.styles';

import {
    Typography,
    Grid,
    Box,
    FormControl,
    TextField,

    Button,


} from '@mui/material';
const AddCategory = () => {
    return (
        <Container>
            <Grid container columns={12} spacing={4}>
                <Grid item xs={12} md={12}>
                    <Card title='Add New Category'>
                        <Box sx={mainForm} component='form'>
                            <Grid item xs={12} md={12} display='flex' gap={2}>
                                <Grid item xs={6} md={8} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
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
                                        The “slug” is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <FormControl>
                                        <Typography fontWeight='bold' variant='body1'>
                                            Thumbnail
                                        </Typography>
                                        <Box sx={smallBoxes}>
                                            <Typography variant='body2' fontWeight='bold' textAlign='center' color='gray.500'>
                                                Upload Image
                                            </Typography>
                                        </Box>
                                    </FormControl>
                                </Grid>
                            </Grid>
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
    )
}

export default AddCategory