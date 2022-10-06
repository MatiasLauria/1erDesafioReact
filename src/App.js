import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListContainer saludo={'¡Bienvenidos a Frozenshop!'}/>}/>
      <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>    

    
      </header>
    </div>
  );
}

export default App;
