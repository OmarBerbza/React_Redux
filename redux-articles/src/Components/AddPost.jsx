import {  useState } from "react"
import { useDispatch } from "react-redux"
import { create } from "../Store/actionTypes"

function AddPost() {
    const dispatch = useDispatch()
    const [post, setPost] = useState({})

    function handleChange(e){
        const {name, value} = e.target
        setPost(pre=> (
            {
                ...pre,
                [name]:value
            }
        ))
    }
    function handleCreate(){

        dispatch(create(post))

    }
    return (
        <div>
            
            <input onChange={handleChange} type="text" name='title' placeholder='Title' />
            <br />
            
            <textarea onChange={handleChange} name="description" placeholder='Description'  cols="30" rows="10"></textarea>
            <br />
            
            <button onClick={handleCreate}>Add</button>
            

        </div>
    )
}

export default AddPost
