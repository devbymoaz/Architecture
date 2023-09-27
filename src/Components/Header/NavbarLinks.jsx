import { Button } from '@mui/material';

import { Link } from 'react-router-dom';

const NavbarLinks = () => {
    return (
        <>
            <Button variant="contained" component={Link} to='/signup'>
                SignUp
            </Button>
            <Button variant="contained" component={Link} to='/login'>
                Login
            </Button>
        </>
    );
};

export default NavbarLinks;