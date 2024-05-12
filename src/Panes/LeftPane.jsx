import React from 'react'
import LocationCard from '../Cards/LocationCard'



const LeftPane = () => {

    let numberOfCards = 10
    const cardElements = Array.from({ length: numberOfCards }, (_, index) => (
        <LocationCard key={index} />
      ));


  return (
    <div 
    style={{
        backgroundColor:"salmon",
        height: '95%',
        overflowY: 'auto',
        paddingTop: "5%",
        paddingBottom: "5%"
    }}
    >
       <div
       style={{ 
        marginLeft:"10%", 
        marginRight:"10%",

        }}
        >
            {cardElements}
       </div>
    </div>
  )
}

export default LeftPane
