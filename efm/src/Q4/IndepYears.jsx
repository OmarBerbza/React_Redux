import React from 'react'
import { useSelector } from 'react-redux'

function IndepYears({pay}) {
    const pays = useSelector(state => state.continent.reduce((prev, curr) => prev.concat(curr.pays), []).filter(pays => pays.indepYear === pay));

  return (
    <div className='row'>
        {pays.map((p, i)=>(
            <div className='card m-2' style={{width: "18rem;"}} key={i}>
                <img src={p.image} className="card-img-top" alt={p.nom} />
                <div className="card-body bg-light rounded ">
                    <h3 className='text-primary fw-bold'>{p.nom}</h3>
                    <p className="card-text"><b>L'année de l'indépendance:</b> {p.indepYear}</p>
                    <p className="card-text"><b>Le capitale:</b> {p.capitale}</p>
                    <p className="card-text"><b>La population:</b> {p.population}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
        ))}
    </div>
  )
}

export default IndepYears