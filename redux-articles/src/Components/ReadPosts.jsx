import React, { useRef,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {delete_p, update } from '../Store/actionTypes';

function ReadPosts() {
    const data = useSelector(data =>data.articles)
    const dispatch = useDispatch();
    const [edit , setEdit] = useState(false)
    const titleRef = useRef();
    const descriptionRef = useRef();


    function handleUpdate(){
      setEdit(true)
    }

    function handleValide(id){
      console.log(titleRef.current.textContent)

      const post = {id:id, title: titleRef.current.textContent, decription: descriptionRef.current.textContent }

      console.log('post ', post)

      dispatch( update(post))
      
      setEdit(pre =>!pre)
      console.log('updata',data)

    }

    function handleDelete(id){
      dispatch(delete_p(id))
    }


  return (
    <div> 
      {console.log('read ',data)} 
      {
        
        data &&  data.map((item,i)=>(
            <div key={item.id}  >
              <h1 ref={titleRef} contentEditable={edit}>{item.title}</h1>
              <p ref={descriptionRef} contentEditable={edit}>{item.description}</p>
              {!edit && <button onClick={handleUpdate}>Edit</button> }
              {edit && <button onClick={()=>handleValide(item.id)}>Valider</button> }
              <button onClick={()=>handleDelete(item.id)}>Delete</button>
            </div>
          
          ))
        }
    </div>
  )
}

export default ReadPosts
