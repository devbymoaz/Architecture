import { AppBar, Avatar, Box, IconButton, TextField, Toolbar, Typography, Button } from '@mui/material';
import { useTheme } from '@emotion/react';
import SearchIcon from '@mui/icons-material/Search';
import { ExitToApp } from '@mui/icons-material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import MainSection from '../MainSection/MainSection';
const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const theme = useTheme();
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar sx={{ background: theme.palette.primary.main }} position="static">
                    <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
                        <Box sx={{display:'flex'}}>
                        <img src='/assets/log.png' alt="logo" width="55px" />
                        <Typography variant="h6" component="div" sx={{mt:1.5, fontSize:'1.5rem', color:'#3E393C', fontWeight:'bold'}}>
                            Architecture
                        </Typography>
                        </Box>
                        <Box >
                        <TextField placeholder='Search Anything'
                        size='small'
                        sx={{
                            width:'500px',
                            background:'#fff'
                        }}
                        />
                        <Button variant='contained' color='secondary' sx={{height:'40px',}}>
                            <SearchIcon />
                        </Button>
                        </Box>
                        <Box sx={{display:'flex'}}>
                        <Avatar src="/assets/user.png" 
                        sx={{cursor:'pointer'}} 
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        /> 
                        <Button variant='contained' sx={{ml:2}} color='secondary' endIcon={<ExitToApp />}>
                            Sign Out 
                        </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
            </Box>
          <MainSection />
        </>
    );
};

export default Navbar; 