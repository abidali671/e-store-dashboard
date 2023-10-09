import { UnverifyIcon, VerifiedIcon } from '@assests/icons'
import Navbar from '@components/navbar'
import { Box, Typography, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import API from 'src/axios'

const Verify = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [responseMessage, setResponseMessage] = useState(null)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const token = searchParams.get('token');
    const navigate = useNavigate()
    const handleSubmit = async () => {
        try {
            const res = await API.get(`/api/auth/verify?id=${id}&token=${token}`);
            setResponseMessage(res.data.message)
            setLoading(false);
        } catch (error) {
            setError(error.response.data['error']);
            setLoading(false);
        }
    };


    useEffect(() => {
        handleSubmit();
    }, []);

    return (
        <React.Fragment>
            <Navbar isSearchBar={false} isNav={false} />
            <Box component='div' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '70vh', gap: 1 }}>
                {loading ? (
                    <Typography variant="body2" fontWeight={700} color="initial">Loading...</Typography>
                ) : error ? (
                    <>
                        <Typography variant="h6" fontWeight={700} color="initial">Verified Unsuccessfull</Typography>
                        <Typography variant="caption" fontWeight={700} color="initial">{error}</Typography>

                        <UnverifyIcon />
                        <Button variant="contained" color='secondary' onClick={() => navigate('/login')}>
                            Ok
                        </Button>
                    </>
                ) : (
                    <>
                        <Typography variant="h6" fontWeight={700} color="initial">Verified Successfully</Typography>
                        <Typography variant="caption" fontWeight={700} color="initial">{responseMessage}</Typography>

                        <VerifiedIcon />
                        <Button variant="contained" color='secondary'>
                            Go to login
                        </Button>
                    </>
                )}
            </Box>
        </React.Fragment>
    );
}

export default Verify