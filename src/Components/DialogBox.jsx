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
    
    if (buttonText === 'Signup') {
      try {
        console.log("request sent")
        const response = await fetch('http://localhost:8000/api/register', {
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
          // Login successful, you can perform any necessary actions here
          setIsLoggedIn(!isLoggedIn)
          console.log('SignUp successful');
        } else {
          // Login failed, handle error
          console.error('SingUp failed:', response.statusText);
        }
      } catch (error) {
        console.error('An error occurred during login:', error);
      }
    } 
    else if (buttonText === 'Login') {
      try {
        console.log("request sent")
        const response = await fetch('http://localhost:8000/api/login', {
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
          // Login successful, you can perform any necessary actions here
          setIsLoggedIn(!isLoggedIn)
          console.log('Login successful');
        } else {
          // Login failed, handle error
          console.error('Login failed:', response.statusText);
        }
      } catch (error) {
        console.error('An error occurred during login:', error);
      }
    } else if (buttonText === 'Logout') {
      try {
        console.log("request sent")
        const response = await fetch('http://localhost:8000/api/login', {
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
          // Login successful, you can perform any necessary actions here
          setIsLoggedIn(!isLoggedIn)
          console.log('Logout successful');
        } else {
          // Login failed, handle error
          console.error('Logout failed:', response.statusText);
        }
      } catch (error) {
        console.error('An error occurred during login:', error);
      }
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


































// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

// const DialogBox = ({ buttonText, dialogTitle, dialogContentText }) => {
//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>

//       <Button variant="outlined" onClick={handleClickOpen} color="inherit">
//         {buttonText}
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           component: 'form',
//           onSubmit: (event) => {
//             event.preventDefault();
//             const formData = new FormData(event.currentTarget);
//             const formJson = Object.fromEntries(formData.entries());
//             const email = formJson.email;
//             console.log(email);
//             handleClose();
//           },
//         }}
//       >

//         <DialogTitle>{dialogTitle}</DialogTitle>
//         <DialogContent>
//           <DialogContentText>{dialogContentText}</DialogContentText>
//           <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="name"
//             name="email"
//             label="Email Address"
//             type="email"
//             fullWidth
//             variant="standard"
//           />
//         </DialogContent>
//         <DialogContent>
//           <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="password"
//             name="password"
//             label="Password"
//             type="passwor"
//             fullWidth
//             variant="standard"
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button type="submit">Subscribe</Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// };

// export default DialogBox;