import { VerifiedIcon } from '@assests/icons'
import Navbar from '@components/navbar'
import { Box, Typography, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import API from 'src/axios'

const Verify = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const token = searchParams.get('token');

    const handleSubmit = async () => {
        try {
            await API.get(`/api/auth/verify?id=${id}&token=${token}`);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        handleSubmit();
    }, []);

    return (
        <>
            <Navbar isSearchBar={false} />
            <Box component='div' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '70vh', gap: 1 }}>
                {loading ? (
                    <Typography variant="body2" fontWeight={700} color="initial">Loading...</Typography>
                ) : error ? (
                    <Typography variant="body2" fontWeight={700} color="initial">{error}</Typography>
                ) : (
                    <>
                        <Typography variant="h6" fontWeight={700} color="initial">VERIFIED SUCCESSFULLY</Typography>
                        <VerifiedIcon />
                        <Button variant="contained" sx={{
                            backgroundColor: 'black',
                            '&:hover': {
                                color: 'black',
                                backgroundColor: 'initial',
                            },
                        }}   >
                            Ok
                        </Button>
                    </>
                )}
            </Box>
        </>
    );
}

export default Verify