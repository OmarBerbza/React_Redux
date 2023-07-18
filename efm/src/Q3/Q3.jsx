import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Q3() {
  const continent = useSelector((data)=> data.continent);
  const dispatch = useDispatch();

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

      <div className='mt-4 row'>
        <h2 className='text-light'>Continents: (Q3)</h2>
        {continent.map((c, i)=>{
          return(
            <div className="card m-2" key={i} >
              <img src={c.imag} className="card-img-top" alt={c.nom}/>
              <div className="card-body">
                <h3 className="card-title text-warning">{c.nom}</h3>
                <p className="card-text"><b>La superficie:</b> {c.surface}</p>
                <p className="card-text"><b>La population:</b> {c.population}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          )
        })}
      </div>

      {/* <Link to="/q4"><button className='btn btn-primary text-light'>Année de l'indépendance des pays</button></Link> */}


      <br /><br /><br /><br /><br /><br /><br />  
    </div>
  )
}

export default Q3