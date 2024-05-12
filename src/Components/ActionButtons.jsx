// ActionButtons.jsx
import React from 'react';
import DialogBox from '../Components/DialogBox.jsx';

const ActionButtons = ({ buttons }) => {
  console.log(buttons)

  return (
    <div>
      {buttons.map((button, index) => (
        <DialogBox
          key={index}
          buttonText={button.buttonText}
          dialogTitle={button.dialogTitle}
          dialogContentText={button.dialogContentText}
        />
      ))}
    </div>
  );
};

export default ActionButtons;









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
