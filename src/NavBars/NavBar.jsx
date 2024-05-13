import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ActionButtons from '../Components/ActionButtons.jsx';
import TemporaryDrawer from './Drawer.jsx';

export default function ButtonAppBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoggedInState = localStorage.getItem('isLoggedIn');
    if (storedLoggedInState === 'true') {
      setIsLoggedIn(true);
    }
  }, []); 

  const buttons = isLoggedIn
    ? [
        {
          buttonText: 'Logout',
          dialogTitle: 'Logout',
          dialogContentText: 'Are you sure you want to logout?',
        },
        {
          buttonText: 'Profile',
          dialogTitle: 'User Profile',
          dialogContentText: 'Here you can view and edit your profile.',
        },
      ]
    : [
        {
          buttonText: 'Login',
          dialogTitle: 'Login',
          dialogContentText: 'Please login to access your account.',
        },
        {
          buttonText: 'Signup',
          dialogTitle: 'Sign Up',
          dialogContentText: 'Create an account to access all features.',
        },
      ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <TemporaryDrawer />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Location Based Service
          </Typography>
          <ActionButtons buttons={buttons} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}