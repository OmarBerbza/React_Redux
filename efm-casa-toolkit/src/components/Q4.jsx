import React, { useState } from 'react'
import PaysByIndepYear from './PaysByIndepYear'
import { useSelector } from 'react-redux'

const Q4 = () => {
  // hadi kherrjat lya l39el mn blasto...
  const indepYears = useSelector(state => [...new Set(state.continents.data.reduce((prev, acc) => prev.concat(acc.pays), []).map(pays => pays.indepYear))])

  // method 2 en utilisant flat() (thanks to AI) 
  // const indepYears = useSelector(state => state.continents.map(continent => continent.pays).flat().map(pays => pays.indepYear))
  const [selectedYear, setSelectedYear] = useState(null)
  // console.log(indepYears)
  return (
    <div>
      <h2>Question 4</h2>
      <p>Les annes d'independence</p>
      {
        indepYears.map((year, index) => (
          <a href=' ' key={index} onClick={(e) => {
            e.preventDefault()
            setSelectedYear(year)
          }}> {year} </a>
        ))
      }
      {
        selectedYear && (
          <PaysByIndepYear year={selectedYear} />
        )
      }  
    </div>

  )
}

export default Q4