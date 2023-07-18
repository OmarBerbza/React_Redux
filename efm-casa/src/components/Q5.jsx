import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ajouterPays, modifierPopulation } from '../actionCreator'

const Q5 = () => {
  const continents = useSelector(state => state.continents)
  const dispatch = useDispatch()
  const [selectedContinent, setSelectedContinent] = useState({
    code: '',
    population: ''
  })
  
  const [formData, setFormData] = useState({
    continentCode: '',
    nom: '',
    population: 0,
    capital: '',
    indepYear: 0,
    imageUrl: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      continentCode: formData.continentCode,
      pays: {
        nom: formData.nom,
        population: parseInt(formData.population),
        capital: formData.capital,
        indepYear: parseInt(formData.indepYear),
        image: formData.imageUrl
      }
    }
    dispatch(ajouterPays(data))
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleModifier = (e) => {
    e.preventDefault();

    const data = {
      code: selectedContinent.code,
      population: parseInt(selectedContinent.population)
    }
    dispatch(modifierPopulation(data))
    setSelectedContinent({code: '', population: ''})
  }
  return (
    <div>
      <h2>Question 5</h2>
      <p>Ajouter Pays</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Cotinent Code' name='continentCode' value={formData.continentCode} onChange={handleChange} />
        <input type="text" placeholder='nom de pays' name='nom' value={formData.nom} onChange={handleChange} />
        <input type="number" placeholder='population' name='population' value={formData.population} onChange={handleChange} />
        <input type="text" placeholder='Capital' name='capital' value={formData.capital} onChange={handleChange} />
        <input type="number" placeholder='indepYear' name='indepYear' value={formData.indepYear} onChange={handleChange} />
        <input type="text" placeholder='Image Url' name='imageUrl' value={formData.imageUrl} onChange={handleChange} />
        <button type="submit">Ajouter</button>
      </form>
      <div>
      <form onSubmit={handleModifier}>
        <p>Modifier population de {selectedContinent.code || 'continents'}</p>
        <input type="number" value={selectedContinent.population} onChange={(e) => setSelectedContinent({...selectedContinent, population: e.target.value})} />
        <button>Modifer</button>
      </form>
      <div>
        {
          continents.map((cont) => {
            return (
              <div key={cont.code}>
                <p>{cont.nom}</p>
                <p>Population: {cont.population}</p>
                <button onClick={() => setSelectedContinent({code: cont.code, population: cont.population})}>Modifier</button>
              </div>
            )
          })
        }
      </div>
      </div>
    </div>
  )
}

export default Q5