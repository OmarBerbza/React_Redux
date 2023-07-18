import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './Component/AddUser';
import UpdateUser from './Component/UpdateUser';
import UserList from './Component/UserList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList/>} />
          <Route path='/add-user' element={<AddUser/>} />
          <Route path='/update-user/:id' element={<UpdateUser/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
