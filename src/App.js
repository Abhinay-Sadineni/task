import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Add';
import{useState,useEffect} from 'react';

function App() {

 


  return (
    <BrowserRouter>
    <main>
      <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/create' element={<Create/>}></Route>
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
