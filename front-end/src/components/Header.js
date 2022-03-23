// React essentials
import React from 'react'
import { useState} from 'react'

// Material UI (Library used for themeing )
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'

// Assets
import LOGO from '../assets/imgs/gamecocks.png'


function Header(){
    {/* public pages that don't need user log in */}
  const pages = ['About', 'Contact', 'Documentation'];
    {/* settings: options when you click on image*/}
  const settings = ['Profile', 'Logout']

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
      
  }

    return(
        <> 
        {/* Bar on the top of the screen */}
        <AppBar className='header' position= 'sticky' style ={{background: '#cc0000'}}> 
            
            <Container>

                <Toolbar>
                    
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >   
                        {/* Insert the logo here */}
                        <img src={LOGO} alt="Logo" width="100" height="80"/>

                    </Typography>
                            
                    {/* This box is used for the public pages section*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {/* this iterates through the pages array and insert a buttons for each */}
                        {pages.map((page) => (

                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                href={'/'+page}
                            >
                                {page}
                            </Button>

                        ))}

                    </Box>

                    {/* This is the Login/dashboard section on the right */}
                    <Box 
                    sx={{ flexGrow: 0, 
                    display: { xs: 'none', md: 'flex' }, 
                    '&:hover': { 
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                        },
                        } }> 

                        {/* if loggedIs true, display dashboard, else display login */}
                        { loggedIn ? 
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            href='/admin/dashboard'
                        >
                            Dashboard
                        </Button> 

                        :

                        <Button
                        onClick={ handleLogin}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                        href='/login'
                        >
                            Login
                        </Button>   
                        }
                        
                    </Box>

                        {/* this box is for the image 'avatar' next to the above button */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" 
                                        src="/static/images/avatar/2.jpg" 
                                />
                            </IconButton>
                            
                        </Tooltip>
                            <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                            >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                            </Menu>

                    </Box>

                </Toolbar>

            </Container>

        </AppBar>
        </>
    );

};

export default Header;