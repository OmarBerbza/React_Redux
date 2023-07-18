import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addUser } from '../Store/actionsTypes';

function AddUser() {
    const dispatch = useDispatch();
    const users = useSelector(user=> user.users);
    const count = users.length;
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleAddUser(){
        if(name && email){
            dispatch(addUser({id: count+1, name: name, email: email}));
            navigate('/')
        }else{
            setMessage('All required fields');
        }
    }

  return (
    <form onSubmit={(e)=> e.preventDefault()}>

        <label htmlFor="name">Full Name:</label>
        <input type="text" onChange={(e)=> setName(e.target.value)} className='' name='name' value={name} /> <br />
        <p style={{color: 'red'}}>{message} </p>

        <label htmlFor="mail">Email:</label>
        <input type="mail" onChange={(e)=> setEmail(e.target.value)} className='' name='mail' value={email} /> <br />
        <p style={{color: 'red'}}>{message} </p>

        <button onClick={()=> handleAddUser()} className=''>Add User</button>
    </form>
  )
}

export default AddUser