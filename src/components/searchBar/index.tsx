import { Search } from '@assests/icons'
import { Box, IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import React, { useState } from 'react'


const SearchBar: React.FC<{ placeholderText: string, setOnSearch?: React.Dispatch<React.SetStateAction<string>> }> = ({ placeholderText, setOnSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Handler for search input change
    const handleSearchChange = (event: any) => {
        setSearchTerm(event.target.value);
    }

    // Handler for search button click
    const handleSearchClick = () => {
        setOnSearch(searchTerm);
    }
    return (
        <Box sx={{ width: '50%' }}>
            <OutlinedInput
                placeholder={placeholderText}
                sx={{
                    borderRadius: '50px',
                    height: 45,
                }}
                fullWidth
                onChange={handleSearchChange}
                id='outlined-adornment-weight'
                startAdornment={
                    <InputAdornment position='end'>
                        <IconButton
                            sx={{ width: '30px' }}
                            size='small'
                            aria-label='toggle password visibility'
                            onClick={handleSearchClick}
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