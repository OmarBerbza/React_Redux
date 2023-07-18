import React from 'react'

const ContinentCard = ({id, image, nom, surface, population}) => {
  return (
    <div className='card'>
        <img src={image} alt={nom} style={{width: '300px'}} />
        <h2>{nom}</h2>
        <p>Superficie: {surface}</p>
        <p>Population: {population}</p>
    </div>
  )
}

export default ContinentCard