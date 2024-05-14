import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

const One = () => {
  const [latitude1, setLatitude1] = React.useState('');
  const [longitude1, setLongitude1] = React.useState('');
  const [latitude2, setLatitude2] = React.useState('');
  const [longitude2, setLongitude2] = React.useState('');
  const [distance, setDistance] = React.useState(null);

  const handleCalculateDistance = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/distance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          coordinate1: {
            latitude: latitude1,
            longitude: longitude1
          },
          coordinate2: {
            latitude: latitude2,
            longitude: longitude2
          }
        })
      });
      if (!response.ok) {
        throw new Error('Failed to calculate distance');
      }
      const data = await response.json();
      setDistance(data.data['Distance in Meters']);
    } catch (error) {
      console.error('Error calculating distance:', error);
    }
  };

  return (
    <div>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Please Enter Valid Coordinates
            </Typography>
            <TextField
              id="latitude1"
              label="Latitude 1"
              variant="filled"
              value={latitude1}
              onChange={(e) => setLatitude1(e.target.value)}
              fullWidth
              sx={{ mb: 1 }}
            />
            <TextField
              id="longitude1"
              label="Longitude 1"
              variant="filled"
              value={longitude1}
              onChange={(e) => setLongitude1(e.target.value)}
              fullWidth
              sx={{ mb: 1 }}
            />
            <TextField
              id="latitude2"
              label="Latitude 2"
              variant="filled"
              value={latitude2}
              onChange={(e) => setLatitude2(e.target.value)}
              fullWidth
              sx={{ mb: 1 }}
            />
            <TextField
              id="longitude2"
              label="Longitude 2"
              variant="filled"
              value={longitude2}
              onChange={(e) => setLongitude2(e.target.value)}
              fullWidth
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              onClick={handleCalculateDistance}
              fullWidth
              sx={{ fontSize: "154%", mb: 2 }}
            >
              Calculate Distance
            </Button>
            {distance !== null && (
              <Typography variant="h5" component="div">
                Distance: {distance} Meters
              </Typography>
            )}
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default One;


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { TextField } from '@mui/material';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// const card = (


//   <React.Fragment>


//     <div 
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 width: "100%",
//                 justifyContent: "space-around",
//                 alignItems: "center"
//               }}
//             >
//                 <div style={{ width: "100%", border:"solid 1px salmon" }}>
//                   <TextField
//                     id="latitude1"
//                     label="Latitude1"
//                     variant="filled"
//                     // value={latitude}
//                     // onChange={(e) => setLatitude(e.target.value)}
//                     fullWidth // Added to make the text field occupy the whole width
//                     sx={{ backgroundColor: 'white' }}
//                   />

//                   <TextField
//                     id="longitude1"
//                     label="Longitude1"
//                     variant="filled"
//                     // value={longitude}
//                     // onChange={(e) => setLongitude(e.target.value)}
//                     fullWidth // Added to make the text field occupy the whole width
//                     sx={{ backgroundColor: 'white' }}
//                   />
//                 </div>

//                 <div style={{ width: "100%", border:"solid 1px salmon"}}>
//                   <TextField
//                     id="longitude2"
//                     label="Longitude2"
//                     variant="filled"
//                     // value={longitude}
//                     // onChange={(e) => setLongitude(e.target.value)}
//                     fullWidth // Added to make the text field occupy the whole width
//                     sx={{ backgroundColor: 'white' }}
//                   />

//                     <TextField
//                     id="longitude2"
//                     label="Longitude2"
//                     variant="filled"
//                     // value={longitude}
//                     // onChange={(e) => setLongitude(e.target.value)}
//                     fullWidth // Added to make the text field occupy the whole width
//                     sx={{ backgroundColor: 'white' }}
//                   />
//                 </div>
    
//                 <div style={{ width: "100%", height: "100%" }}>
//                   <Button 
//                     variant="contained" 
//                     // onClick={handleAddLocation} 
//                     fullWidth
//                     style={{ fontSize: "350%" }} // Added to make the button occupy the full height
                    
//                   >
//                     DISTANCE
//                   </Button>
//                 </div>
//             </div>



//             <CardContent>
//               <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Please Enter Valid Coordinates</Typography>
//               <Typography variant="h5" component="div">INSERT THE DISTANCE HERE</Typography>
//               <Typography sx={{ mb: 1.5 }} color="text.secondary">ketan</Typography>

//             </CardContent>


//   </React.Fragment>
// );

// function OutlinedCard() {
//   return (
//     <Box sx={{ minWidth: 275 }}>
//       <Card variant="outlined">{card}</Card>
//     </Box>
//   );
// }


// const One = () => {
//   return (
//     <div>
//       <OutlinedCard></OutlinedCard>
//     </div>
//   )
// }

// export default One