import { Search } from '@assests/icons'
import { Box, IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import React from 'react'


const SearchBar: React.FC<{ placeholderText: string }> = ({ placeholderText }) => {
    return (
        <Box sx={{ width: '50%' }}>
            <OutlinedInput
                placeholder={placeholderText}
                sx={{
                    borderRadius: '50px',
                    height: 45,
                }}
                fullWidth
                id='outlined-adornment-weight'
                startAdornment={
                    <InputAdornment position='end'>
                        <IconButton
                            sx={{ width: '30px' }}
                            size='small'
                            aria-label='toggle password visibility'
                        >
                            <Search />
                        </IconButton>
                    </InputAdornment>
                }
                aria-describedby='outlined-weight-helper-text'
                inputProps={{
                    'aria-label': 'weight',
                }}
            />
        </Box>
    )
}

export default SearchBar