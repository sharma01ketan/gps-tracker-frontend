import React, { useState, useEffect } from 'react';
import LocationCard from '../Cards/LocationCard';

const LeftPane = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetchLocations();
    }, []); // Empty dependency array ensures the effect runs only once after the initial render

    const fetchLocations = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/allLocations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: 'sharma01ketan@gmail.com' // Replace with actual username
                })
            });
            if (!response.ok) {
                throw new Error('Failed to fetch locations');
            }
            const data = await response.json();
            const locationIds = data.data; // Assuming data contains an array of location IDs

            // Fetch details of each location by its ID
            const fetchedLocations = await Promise.all(locationIds.map(async (locationId) => {
                const locationResponse = await fetch(`http://localhost:8000/api/location/${locationId}`);
                if (!locationResponse.ok) {
                    throw new Error(`Failed to fetch location ${locationId}`);
                }
                const locationData = await locationResponse.json();
                return locationData.data; // Assuming location data is returned in the 'data' field
            }));

            setLocations(fetchedLocations);
        } catch (error) {
            console.error('Error fetching locations:', error);
        }
    };

    return (
        <div 
            style={{
                backgroundColor: "salmon",
                height: '95%',
                overflowY: 'auto',
                paddingTop: "5%",
                paddingBottom: "5%"
            }}
        >
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
                        content={location.content} // Assuming content is a field of location object
                        subtitle={`Subtitle ${index + 1}`} // Assuming subtitle is a field of location object
                    />
                ))}
            </div>
        </div>
    );
};

export default LeftPane;





// import React from 'react'
// import LocationCard from '../Cards/LocationCard'

// const LeftPane = () => {

//     let numberOfCards = 10
//     const cardElements = Array.from({ length: numberOfCards }, (_, index) => (
//         <LocationCard key={index} title={index} content={index} subtitle={index}/>
//       ));
// //ketan sharma

//   return (
//     <div 
//     style={{
//         backgroundColor:"salmon",
//         height: '95%',
//         overflowY: 'auto',
//         paddingTop: "5%",
//         paddingBottom: "5%"
//     }}
//     >
//        <div
//        style={{ 
//         marginLeft:"10%", 
//         marginRight:"10%",

//         }}
//         >
//             {cardElements}
//        </div>
//     </div>
//   )
// }

// export default LeftPane
