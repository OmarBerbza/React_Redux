import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Q6 = () => {
  const [filterParPopulation, setFilterParPopulation] = useState(true)
  const pays = useSelector(state => filterParPopulation ?  state.continents
    .reduce((prev, curr) => prev.concat(curr.pays), [])
    .sort((prev, next) => next.population - prev.population)
      :
    state.continents
  )
  // console.log(pays)
  return (
    <div>
      <h2>Question 6</h2>
      <button onClick={()=> setFilterParPopulation(true)}>Filter Par Population</button>
      <button onClick={()=> setFilterParPopulation(false)}>Filter Par Continents</button>
      {
        filterParPopulation ? pays.map((pays, index) => {
          return (
            <div key={index}>{pays.nom} ({pays.population})</div>
          )
        }) : 
        pays.map((continant) => {
          return (
            <div key={continant.code}>
              <p>{continant.nom}</p>
              <ul>
                {
                  continant.pays.map((pays, index) => {
                    return (
                      <li key={index}>{pays.nom}</li>
                    )
                  } )
                }
              </ul>
            </div>
          )
        })
      }
    </div>
  )
}

export default Q6