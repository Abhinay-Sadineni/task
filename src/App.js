import './App.css';
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import ListPage from './components/ListPage';
import Edit from './components/Edit';
function App() {

  return (
    <BrowserRouter basename='/task'>
    <main>
      <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/create' element={<Create/>}></Route>
      <Route exact path='/edit/:id' element={<Edit/>}></Route>
      <Route exact path='/list' element={<ListPage/>}></Route>
      </Routes>
    </main>
    </BrowserRouter >
  );
}

export default App;
