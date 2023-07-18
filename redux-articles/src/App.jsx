import './App.css';
import AddPost from './Components/AddPost';
import ReadPosts from './Components/ReadPosts';
// import UpdatePost from './Components/UpdatePost' 
function App() {

  return (
    <div  >
        <h1>Blog Post</h1>
        <AddPost />
        <ReadPosts />
        {/* <UpdatePost  /> */}
      
      
    </div>
  );
}

export default App;
