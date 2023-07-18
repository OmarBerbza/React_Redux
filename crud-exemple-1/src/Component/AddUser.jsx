import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { add, filter, modify, delet } from '../Store/actionTypes';
import { Table } from 'react-bootstrap';

function AddUser() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [message, setMessage] = useState('');
    const [city, setCity] = useState(1);
    const [cityFilter, setCityFilter] = useState(1);

    const users = useSelector((state)=> state.users);
    const cities = useSelector((data)=> data.cities);
    const dispatch = useDispatch();

    const count = users.length;  

    const handleClick = ()=>{
        if(name && email && pass){

            dispatch(add({id: count + 1, name: name, email: email, pass: pass, city: parseInt(city)}));
            handleClear();
        }else{
            setMessage('All required fields');
        }
    }

    const handleClear = ()=>{
        setId('');
        setName('');
        setEmail('');
        setPass('');
        setCity(1);
    }

    const handleValid = ()=>{
        dispatch(modify(
            {id: count, name: name, email: email, pass: pass, city: parseInt(city)}
        ));
        handleClear();
        setId("");
    }

    const ModifyUser = (id)=>{
        const user = users.find((u)=> u.id === parseInt(id));
        setId(id);
        setName(user.name);
        setEmail(user.email);
        setPass(user.pass);
        setCity(user.city);
    }

    const handleFilter = ()=>{
        dispatch(filter(cityFilter));
    }
    
  return (
    <div className="container">
        <h1 className=''>Registre:</h1>
        <form className='container' onSubmit={(e)=> e.preventDefault()}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter full name" onChange={(e)=> setName(e.target.value)} value={name} />

                <Form.Text id="passwordHelpBlock" className='text-danger ms-3'>{message}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"  onChange={(e)=> setEmail(e.target.value)} value={email}  />

                <Form.Text id="passwordHelpBlock" className='text-danger ms-3'>{message}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e)=> setPass(e.target.value)} value={pass} />
                
                <Form.Text id="passwordHelpBlock" className='text-danger ms-3'>{message}</Form.Text>
            </Form.Group>

            <div className="mt-3 mb-3">
                <Form.Label>City</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e)=> setCity(e.target.value)} value={city} >
                    {cities.map((v, i)=>{
                        return <option key={i} value={v.id} name='city'>{v.vill}</option>
                    })}
                </Form.Select>
            </div>
        
            {!id ? (<><Button variant="outline-primary" onClick={()=>handleClick()}>Submit</Button>{' '}</>) : (<><Button variant="outline-warning" onClick={()=> handleValid()}>Valid</Button>{' '}</>)}
        </form>
                    
        <hr />

        <div className="container mt-4">
            <div className="mt-3 mb-3">
                <Form.Label>Filter City</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e)=> setCityFilter(e.target.value)} value={cityFilter} >
                    {cities.map((v, i)=>{
                        return <option key={i} value={v.id} name='ville'>{v.vill}</option>
                    })}
                </Form.Select>
                <Button className='mt-2' variant="outline-primary" onClick={()=>handleFilter()}>Filter</Button>
                <Button className='mt-2 ms-1' variant="outline-primary" onClick={()=>handleClear()}>Clear</Button>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u, i)=>{
                        const ci = cities.find((c) => c.id === u.city);
                        return(
                            <tr key={i}>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>{ci.vill}</td>
                                <td>
                                    <Button className='ms-5' variant='warning' onClick={()=> ModifyUser(u.id)} >Modify</Button> {' '}
                                    <Button className='ms-5' variant='danger' onClick={()=> dispatch(delet(u.id))} >Delete</Button> {' '}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    </div>
  )
}

export default AddUser