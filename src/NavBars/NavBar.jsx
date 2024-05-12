// Navbar.jsx
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ActionButtons from '../Components/ActionButtons.jsx';
import TemporaryDrawer from './Drawer.jsx';

export default function ButtonAppBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <TemporaryDrawer/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Location Based Service
          </Typography>
          <ActionButtons isLoggedIn={isLoggedIn} onLoginSuccess={handleLoginSuccess} onLogout={handleLogout} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}



// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ActionButtons from '../Components/ActionButtons.jsx';
// import TemporaryDrawer from './Drawer.jsx';

// export default function ButtonAppBar() {

//   // const isLoggedIn = true; 
//   // const buttons = isLoggedIn ? ['Logout', 'Profile'] : ['Login', 'Signup'];
//   const isLoggedIn = false;

//   const buttons = isLoggedIn
//   ? [
//       {
//         buttonText: 'Logout',
//         dialogTitle: 'Logout',
//         dialogContentText: 'Are you sure you want to logout?',
//       },
//       {
//         buttonText: 'Profile',
//         dialogTitle: 'User Profile',
//         dialogContentText: 'Here you can view and edit your profile.',
//       },
//     ]
//   : [
//       {
//         buttonText: 'Login',
//         dialogTitle: 'Login',
//         dialogContentText: 'Please login to access your account.',
//       },
//       {
//         buttonText: 'Signup',
//         dialogTitle: 'Sign Up',
//         dialogContentText: 'Create an account to access all features.',
//       },
//     ];


//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <TemporaryDrawer/>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Location Based Service
//           </Typography>
//           <ActionButtons buttons={buttons} /> {/* Pass array of button labels as props */}
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }







































// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';



// export default function ButtonAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Location Based Service
//           </Typography>
//           <div>
//           <Button color="inherit">Login</Button>
//           <Button color="inherit">Signup</Button>
//           </div>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
