import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import IndepYears from './IndepYears';

function Q4() {
  // const continent = useSelector((data)=> data.continent);

  const indepYears = useSelector(state => [...new Set(state.continent.reduce((prev, acc) => prev.concat(acc.pays), []).map(pays => pays.indepYear))]);

  const [annee, setAnnee] = useState(null);


  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg-warning rounded">
        <div className="container-fluid">
          <h2 className="navbar-brand" >The World</h2>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/" aria-current="page">Accueil</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/q4">Année De L'indépendance</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/q5">Ajouter Pays</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <div className="m-2 mt-4">
        <h4 className='text-light'>Année de l'indépendance des pays: (Q4)</h4>
        <div className="mt-4">
          {indepYears.map((pay, index)=>{
            return(<a href='' className='me-4' key={index} onClick={(e)=>{
              e.preventDefault()
              setAnnee(pay)
            }} ><button className='btn btn-warning text-dark'>{pay}</button></a>)
          })}
        </div>
        <div className="mt-3">
          {annee && (
            <IndepYears pay={annee} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Q4