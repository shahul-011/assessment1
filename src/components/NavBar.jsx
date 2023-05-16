import { AppBar, Button,  Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <AppBar position='static' color='secondary'>
        <Toolbar>
          <Typography component='div'  sx={{flexGrow:1}} align='left'>BLOGAPP</Typography>
          <Button> <Link to='/home' style={{color:'white'}}>home</Link></Button>
          <Button><Link to='/link' style={{color:'white'}}>link</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar