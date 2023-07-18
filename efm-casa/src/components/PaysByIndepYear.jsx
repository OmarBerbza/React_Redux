import React from 'react'
import { useSelector } from 'react-redux'
const PaysByIndepYear = ({year}) => {
    const pays = useSelector(state => state.continents.reduce((prev, curr) => prev.concat(curr.pays), []).filter(pays => pays.indepYear === year))
    // console.log(pays)
  return (
    <div>
        {
            pays.map(p => (
                    <p>{p.nom}</p>
            ))
        }
    </div>
  )
}

export default PaysByIndepYear