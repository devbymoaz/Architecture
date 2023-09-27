import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavbarLinks from './NavbarLinks';
import { Link } from 'react-router-dom';
import ProjectSection from '../../Pages/Home/Project';
import { useTheme } from '@emotion/react';
const Navbar = () => {
    const theme = useTheme();
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar sx={{ background: theme.palette.customColors1.main }} position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <Typography variant="h6" component={Link} to='/' sx={{ flexGrow: 1 }}>
                            Projects
                        </Typography>
                        <NavbarLinks />
                    </Toolbar>
                </AppBar>
            </Box>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                <ProjectSection />
            </Typography>
        </>
    );
};

export default Navbar; 