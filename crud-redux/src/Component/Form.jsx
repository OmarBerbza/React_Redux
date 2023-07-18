import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, clearFilter, deleteUser, filterUser, updateUser } from '../Store/actionTypes';

function Form() {
  const [id, setId] = useState('')
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [ville, setVille] = useState(1);
  const [villeFilter, setVilleFilter] = useState(1);

  const dispatch = useDispatch();
  const villes = useSelector((state)=> state.villes);
  const users = useSelector((state)=> state.users);
  const count = users.length;

  function handleAddUser(){
    dispatch(add( {id: count+1, nom: nom, prenom: prenom, ville: parseInt(ville)} ));
    handleClear()
  }

  function handleClear(){
    setNom('');
    setPrenom('');
    setVille(1)
  }

  function handleUpdateUser(){
    dispatch(updateUser(
      {id: count, nom: nom, prenom: prenom, ville: parseInt(ville)}
    ));
    handleClear();
    setId("")
  } 

  function handleFilter(){
    dispatch(filterUser(villeFilter))
  }

  function handleFilterClear(){
    dispatch(clearFilter())
  }

  function handleUpdate(id){
    const user = users.find((u)=> u.id === parseInt(id));
    setId(id);
    setNom(user.nom);
    setPrenom(user.prenom);
    setVille(user.ville);
  }

  function handleDelete(id){
    dispatch(deleteUser(id))
  }

  return (
    <div>
      <form onSubmit={(e)=> e.preventDefault()}>
        <div className="form">
          <p>
            <label className='labelUp' htmlFor="nom">Nom:</label> <br />
            <label className='labelUp' htmlFor="prenom">Prenom:</label> <br />
            <label className='labelUp' htmlFor="ville">Ville:</label>
          </p>

          <p>
            <input type="text" name='nom' onChange={(e)=> setNom(e.target.value)} className='inputUp' /> <br />
            <input type="text" name='prenom' onChange={(e)=> setPrenom(e.target.value)} className='inputUp' /> <br />
            <select name="" id="" onChange={(e)=> setVille(e.target.value)} value={ville} className='inputUp'>
              {villes.map((vi, index)=>{
                return <option name='ville' key={index} value={vi.id}>{vi.vill}</option>
              })}
            </select> <br />
          </p>
        </div>
        
        <p>
          {!id ? (<button onClick={()=> handleAddUser()} className='save'>Enregistre</button>) : (<button onClick={()=> handleUpdateUser()} className='valid'>Valider</button>)}
        </p>
      </form>

      <div className='second'>
        <p>
          <label htmlFor="filtrer">Filtrer par ville:</label>
          <select onChange={(e)=> setVilleFilter(e.target.value)} className='selectFilter'>
            {villes.map((vi, index)=>{
              return <option key={index} value={vi.id}>{vi.vill}</option>
            })}
          </select>
          <button className='filterCl' onClick={()=>handleFilter()}>Filtrer</button>
          <button className='filterCl' onClick={()=>handleFilterClear()} >Clear</button>
        </p>

        <table border='1px'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Prenom</th> 
              <th>Ville</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index)=> {
              const vs = villes.find((v)=> v.id === user.ville);
              return(
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.nom}</td>
                  <td>{user.prenom}</td>
                  <td>{vs.vill}</td>
                  <td>
                    <button className='update' onClick={()=> handleUpdate(user.id)}>Modifier</button>
                    <button className='delete' onClick={()=> handleDelete(user.id)}>Supprimer</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Form