import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DialogBox = ({ buttonText, dialogTitle, dialogContentText, isLoggedIn,setIsLoggedIn }) => {
  const [open, setOpen] = useState(false);
  const [rerender, setRerender] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
  
    try {
      let response;
      const numberOfItems = localStorage.length;
       if (buttonText === 'Signup') {
        response = await fetch('http://localhost:8000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: formJson.email,
            password: formJson.password,
          }),
        });
        if (response.ok) {

          //yeh maine login wale se churaaya hai
          response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: formJson.email,
              password: formJson.password,
            }),
          });
          //yeh khatam hua mera chori ka maal


          const responseData = await response.json();
          // Save token and user information to local storage
          localStorage.setItem('accessToken', responseData.data.accessToken);
          localStorage.setItem('user', JSON.stringify(responseData.data.user));
          setIsLoggedIn(true);
          console.log('SignUp successful');
          console.log('Stored token:', responseData.data.accessToken);
          console.log('Stored user:', responseData.data.user);
          window.location.reload();
        } else {
          console.error('SignUp failed:', response.statusText);
        }
      } else if (buttonText === 'Login' ) {
        response = await fetch('http://localhost:8000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: formJson.email,
            password: formJson.password,
          }),
        });
        if (response.ok) {
          const responseData = await response.json();
          // Save token and user information to local storage
          localStorage.setItem('accessToken', responseData.data.accessToken);
          localStorage.setItem('user', JSON.stringify(responseData.data.user));
          setIsLoggedIn(true);
          console.log('Login successful');
          console.log('Stored token:', responseData.data.accessToken);
          console.log('Stored user:', responseData.data.user);
          window.location.reload();
        } else {
          console.error('Login failed:', response.statusText);
        }
      } else if (buttonText === 'Logout') {
        // Clear token and user information from local storage
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn'); // Remove logged-in state
        // window.location.reload();
        // setRerender(!rerender)
        console.log('Logout successful');
        window.location.reload();
      }      
    } catch (error) {
      console.error('An error occurred:', error);
    }
  
    handleClose();
  };
  
  
  

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen} color="inherit">
        {buttonText}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogContentText}</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="password"
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DialogBox;