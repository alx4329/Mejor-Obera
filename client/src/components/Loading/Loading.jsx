import React from 'react'
import { Box, CircularProgress } from '@mui/material'
import './Loading.css'
const Loading = () => {
  return (
    <Box className='loading-container' sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
  )
}

export default Loading