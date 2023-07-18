import { useSelector } from "react-redux"

function UpdatePost() {
  const post = useSelector(data => data.posts)

  console.log(post)
  
  function handleUpdate(){
    return 'hello'
  }
    
  return (
    <div>
        <input type="text" name='title' placeholder='Title' value={post.title} />
        <br />
        <textarea name="description" placeholder='Description' value={post.description}  cols="30" rows="10"></textarea>
        <br />
        <button onClick={handleUpdate} >Update</button>
    </div>
  )
}

export default UpdatePost
