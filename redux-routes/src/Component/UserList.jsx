import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUserAction } from '../Store/actionsTypes';

function UserList() {
    const users = useSelector((state)=> state.users);
    const dispatch = useDispatch();

    const deleteUser = (id)=>{
        dispatch(deleteUserAction(id));
    };
    
        // const response = window.confirm(`Are you sure you want to delet this user ${users.name}?`);
        
        // if(response){
        //     dispatch(deleteUserAction(id));
        //     alert(`${users.name} is deleted`)
        // }

  return (
    <div>
        <h1>CRUD React-Redux With Routes:</h1>
        
        <Link to='/add-user'><button>Add User</button> </Link>

        <table border='1px'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, i)=>(
                    <tr key={i}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to={`/update-user/${user.id}`}><button>Update User</button></Link> 
                            <button onClick={()=>deleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        {/* <Link to='/' >List</Link> <br /> */}

    </div>
  )
}

export default UserList