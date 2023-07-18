import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Q3 from './Q3/Q3';
import Q4 from './Q4/Q4';
import Q5 from './Q5/Q5';

function Menu() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Q3/>} />
          <Route path="/q4" element={<Q4/>} />
          <Route path="/q5" element={<Q5/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Menu;
