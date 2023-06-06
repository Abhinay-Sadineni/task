import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import ListPage from './components/ListPage';
import Edit from './components/Edit';
function App() {

  return (
    <BrowserRouter>
    <main>
      <Routes>
      <Route exact path='/task' element={<Home/>}></Route>
      <Route exact path='/task/create' element={<Create/>}></Route>
      <Route exact path='/task/edit/:id' element={<Edit/>}></Route>
      <Route exact path='/task/list' element={<ListPage/>}></Route>
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
