import React, { useState, useEffect } from 'react';
import LocationCard from '../Cards/LocationCard';
import { Button } from '@mui/material';
import {TextField} from '@mui/material';

const LeftPane = () => {
    const [locations, setLocations] = useState([]);
    const [username, setUsername] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [num, setNum] = useState(1)

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            const { username } = JSON.parse(userData);
            setUsername(username);
            fetchLocations(username);
        }
    }, [username]); // Include username as a dependency

    const fetchLocations = async (username) => {
        try {
            const response = await fetch('http://localhost:8000/api/allLocations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username
                })
            });
            if (!response.ok) {
                throw new Error('Failed to fetch locations');
            }
            const data = await response.json();
            console.log(`The data`, data);
            setLocations(data.data); // Assuming data contains an array of location objects
        } catch (error) {
            console.error('Error fetching locations:', error);
        }
    };

    const [rerender, setRerender] = useState(false);
    const forceRerender = () => {
      setRerender(!rerender); // Toggle the value to force rerender
    };

  //   This is in working state
  //   const handleAddLocation = async () => {
  //     try {
  //         const response = await fetch('http://localhost:8000/api/addLocation', {
  //             method: 'POST',
  //             headers: {
  //                 'Content-Type': 'application/json'
  //             },
  //             body: JSON.stringify({
  //                 latitude: parseFloat(latitude),
  //                 longitude: parseFloat(longitude),
  //                 username: username
  //             })
  //         });
  //         if (!response.ok) {
  //             throw new Error('Failed to add location');
  //         }
  //         const data = await response.json();
  //         console.log(`New location added:`, data);
  //         setLocations(data.data);
  
  //         // Reset latitude and longitude fields after adding the location
  //         setLatitude('');
  //         setLongitude('');

  //     } catch (error) {
  //         console.error('Error adding location:', error);
  //     }
  // };

  const handleAddLocation = async () => {
    try {
        const response = await fetch('http://localhost:8000/api/addLocation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                latitude: parseFloat(latitude),
                longitude: parseFloat(longitude),
                username: username
            })
        });
        if (!response.ok) {
            throw new Error('Failed to add location');
        }
        const data = await response.json();
        console.log(`New location added:`, data);
        setLocations(data.data);

        // Reset latitude and longitude fields after adding the location
        setLatitude('');
        setLongitude('');

        // Fetch all locations after adding a new one
        window.location.reload();
        await fetchAllLocations(username);
    } catch (error) {
        console.error('Error adding location:', error);
    }
};

const fetchAllLocations = async (username) => {
    try {
        const response = await fetch('http://localhost:8000/api/allLocations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username
            })
        });
        if (!response.ok) {
            throw new Error('Failed to fetch all locations');
        }
        const data = await response.json();
        console.log(`All locations:`, data);
        setLocations(data.data);
    } catch (error) {
        console.error('Error fetching all locations:', error);
    }
};

  

   
  


    return (
          <div 
              style={{
                  backgroundColor: "salmon",
                  height: '95%',
                  overflowY: 'auto',
                  // paddingTop: "5%",
                  paddingBottom: "5%"
              }}
          >
  
              <div 
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
                <div style={{ width: "100%", border:"solid 1px salmon" }}>
                  <TextField
                    id="latitude"
                    label="Latitude"
                    variant="filled"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    fullWidth // Added to make the text field occupy the whole width
                    sx={{ backgroundColor: 'white' }}
                  />
                </div>

                <div style={{ width: "100%", border:"solid 1px salmon"}}>
                  <TextField
                    id="longitude"
                    label="Longitude"
                    variant="filled"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    fullWidth // Added to make the text field occupy the whole width
                    sx={{ backgroundColor: 'white' }}
                  />
                </div>
    
                <div style={{ width: "100%", height: "100%" }}>
                  <Button 
                    variant="contained" 
                    onClick={handleAddLocation} 
                    fullWidth
                    style={{ fontSize: "154%" }} // Added to make the button occupy the full height
                    
                  >
                    Add Location
                  </Button>
                </div>
            </div>

              <div
                  style={{ 
                      marginLeft: "10%", 
                      marginRight: "10%",
                  }}
              >
                  {locations.map((location, index) => (
                      <LocationCard 
                          key={index} 
                          title={`Location ${index + 1}`} 
                          content={`Latitude: ${location.latitude}, Longitude: ${location.longitude}`} 
                          subtitle={`Subtitle ${index + 1}`} 
                      />
                  ))}
              </div>

        </div>
    );
};

export default LeftPane;