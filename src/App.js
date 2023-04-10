import './App.css';
import Calculator from './components/calculator';
import Home from './components/home';
import DataList from './components/data';
import Navbar from './components/navbar';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
  <div className='App'>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/calculator' element={<Calculator />}/>
      <Route path='/data' element={<DataList />}/>
      </Routes>
      </div>
  </BrowserRouter>
  );
}

export default App;
