import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ajouter } from '../Store/actionsTypes';
import { Link } from 'react-router-dom';

function Q5() {
    // const [continentNom, setContinentNom] = useState('');
    // const [payNom, setPayNom] = useState('');
    // const [capitale, setCapitale] = useState('');
    // const [population, setPopulation] = useState();
    // const [indepYear, setIndepYear] = useState();
    // const [photo, setPhoto] = useState('');
    const continents = useSelector((state)=> state.continent);
    const [selectedContinent, setselectedContinent] = useState({
        code: '',
        population: ''
    })
    const dispatch = useDispatch();
    // const pays = useSelector(state => state.continent.reduce((prev, curr) => prev.concat(curr.pays), []).filter(pays => pays.indepYear === pay));

    const[formData, setFormData] = useState({
        contentsCode: '', 
        nom:'', 
        capitale: '', 
        population:'', 
        indepYear: 0, 
        img: ''
    })
    function handleSubmit(e){
        e.preventDefault()
        const data = {
            contentsCode: formData.contentsCode,
            pays: {
                nom: formData.nom,
                capitale: formData.capitale,
                population: parseInt(formData.population),
                indepYear: parseInt(formData.indepYear),
                img: formData.img
            }
        }
        dispatch(ajouter(data))
    }
    function handleChange(e){
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    // function handleAjoute(){
    //     dispatch(ajouter({
    //         continentNom: continentNom, payNom: payNom, capitale: capitale, population: population, indepYear: indepYear, photo: photo
    //     }))
    // }

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

        <h4 className='text-light mt-3'>Ajouter Pays: (Q5)</h4>
        <form className='mt-5' onSubmit={handleSubmit}>
            <div className="row">
                <div className="col">
                    <input type="text" onChange={handleChange} value={formData.contentsCode} className="form-control" name='contentsCode' placeholder="Entre le nom de Continent" aria-label="Entre le nom de Continent"/>
                </div>
                <div className="col">
                    <input type="text" onChange={handleChange} value={formData.nom} className="form-control" name='nom' placeholder="Le Nom De Pay" aria-label="Le Nom De Pay"/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <input type="text" onChange={handleChange} value={formData.capitale} className="form-control" name='capitale' placeholder="Capitale" aria-label="Capitale"/>
                </div>
                <div className="col">
                    <input type="text" onChange={handleChange} value={formData.population} className="form-control" name='population' placeholder="Le Number De population" aria-label="Le Number De population"/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <input type="number" onChange={handleChange} value={formData.indepYear} className="form-control" name='indepYear' placeholder="Année L'indépendance" aria-label="Année L'indépendance"/>
                </div>
                <div className="col">
                    <input type="text" onChange={handleChange} value={formData.img} className="form-control" name='img' placeholder="URL Photo" aria-label="URL Photo"/>
                </div>
            </div>
            <button className='btn btn-primary mt-3' type='submit'>AJOUTER</button>
        </form>


    </div>
  )
}

export default Q5