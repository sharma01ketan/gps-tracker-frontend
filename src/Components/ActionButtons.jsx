// ActionButtons.jsx
import React from 'react';
import DialogBox from '../Components/DialogBox.jsx';

const ActionButtons = ({ isLoggedIn, onLoginSuccess, onLogout }) => {
  const buttons = isLoggedIn
    ? [
        {
          buttonText: 'Logout',
          dialogTitle: 'Logout',
          dialogContentText: 'Are you sure you want to logout?',
          onClick: onLogout,
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
          onLoginSuccess: onLoginSuccess,
        },
        {
          buttonText: 'Signup',
          dialogTitle: 'Sign Up',
          dialogContentText: 'Create an account to access all features.',
        },
      ];

  return (
    <div>
      {buttons.map((button, index) => (
        <DialogBox
          key={index}
          buttonText={button.buttonText}
          dialogTitle={button.dialogTitle}
          dialogContentText={button.dialogContentText}
          onLoginSuccess={button.onLoginSuccess}
          onLogout={button.onClick}
        />
      ))}
    </div>
  );
};

export default ActionButtons;




// // ActionButtons.jsx
// import React from 'react';
// import DialogBox from '../Components/DialogBox.jsx';

// const ActionButtons = ({ buttons }) => {
//   console.log(buttons)

//   return (
//     <div>
//       {buttons.map((button, index) => (
//         <DialogBox
//           key={index}
//           buttonText={button.buttonText}
//           dialogTitle={button.dialogTitle}
//           dialogContentText={button.dialogContentText}
//         />
//       ))}
//     </div>
//   );
// };

// export default ActionButtons;









// // ActionButtons.jsx
// import React from 'react';
// import Button from '@mui/material/Button';
// import DialogBox from '../Components/DialogBox.jsx'

// const ActionButtons = ({ buttons }) => {
//   return (
//     <div>
//       {buttons.map((label, index) => (
//         // <Button key={index} color="inherit">
//         //   {label}
//         // </Button>
//         <DialogBox key={index}>{label}</DialogBox>
//       ))}
//     </div>
//   );
// };

// export default ActionButtons;
