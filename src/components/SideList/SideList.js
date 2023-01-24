import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { sideListStyle, sideListWrapper } from './styles'
import { Typography } from '@mui/material';
import { sideListItems } from '../data/app.data'
import arrowleft2 from '../../assests/arrowleft2.png'
const SideList = () => {
  const [selectedDiv, setSelectedDiv] = useState('');
  console.log(selectedDiv);

  return (
    <Box sx={sideListWrapper}>
      {
        sideListItems.map((item, ind) => {
          return (
            <React.Fragment key={ind}>
              {
                item.subdivision ? (
                  <>
                    <Divider />
                    <Box sx={{ ml: 2, mt: 2 }} >
                      <Typography gutterBottom>
                        {item.text}
                      </Typography>
                    </Box>
                  </>
                ) : item.divider ? (
                  <Divider />

                ) : (
                  <nav aria-label='Side list items'  >
                    <ListItem className={`${item.id === selectedDiv ? 'select' : 'unselect'
                      }`} disablePadding onClick={() => setSelectedDiv(item.id)}>
                      <ListItemButton >
                        <Box component='img' style={{ display: 'flex', paddingRight: '10px' }} src={item.icon} />
                        <ListItemText sx={sideListStyle} >{item.text}</ListItemText>
                      </ListItemButton>
                    </ListItem>

                  </nav>
                )
              }
            </React.Fragment>
          )
        })
      }
      <Box sx={{ width: '30px', borderTopRightRadius: '30px', borderBottomRightRadius: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '50%', left: '300px', height: '200px', backgroundColor: '#86AAF1' }}>
        <Box component='img' src={arrowleft2} />
      </Box>
    </Box>

  )
}

export default SideList