import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { updateUserAction } from '../Store/actionsTypes';

function UpdateUser() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const user = useSelector((state)=> state.users.find((user)=> user.id === parseInt(id)));
    const navigate = useNavigate();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [message, setMessage] = useState('');

    function handleSave(){
        if(name && email){
            dispatch(updateUserAction({id: id, name: name, email:email}));
            navigate('/');
        }else{
            setMessage('All required fields')
        }
    }
    
  return (
    <div>
        <form onSubmit={(e)=> e.preventDefault()}>
            <h2>Update The Informations</h2>

            <label htmlFor="name">Full Name:</label>
            <input type="text" onChange={(e)=> setName(e.target.value)} className='' name='name' value={name} /> <br />
            <p style={{color: 'red'}}>{message} </p>

            <label htmlFor="mail">Email:</label>
            <input type="mail" onChange={(e)=> setEmail(e.target.value)} className='' name='mail' value={email} /> <br />
            <p style={{color: 'red'}}>{message} </p>

            <button onClick={()=> handleSave()} className=''>SAVE</button>
        </form>
    </div>
  )
}

export default UpdateUser