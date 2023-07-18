import React from 'react'
import { useSelector } from 'react-redux'
import ContinentCard from './ContinentCard'

const Q3 = () => {
  const continents = useSelector(state => state.continents)
  return (
    <div>
      <h2>Question 3</h2>
      {
        continents.map(cont => (
          <ContinentCard key={cont.code} code={cont.code} nom={cont.nom} image={cont.avatar} surface={cont.surface} population={cont.population} indepYear={cont.indepYear} />
      
        ))
      }
    </div>
  )
}

export default Q3