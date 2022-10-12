import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Frutas from './components/Frutas/Frutas';
import Contacto from './components/Contacto/Contacto';
import Almacen from './components/Almacen/Almacen';
import Verduras from './components/Verduras/Verduras';


function App() {
  return (
    <div className="App">
      <header className="App-header">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListContainer saludo={'¡Bienvenidos a Frozenshop!'}/>}/>
      <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
      <Route path='/Frutas' element={<Frutas/>}/>
      <Route path='/Verduras' element={<Verduras/>}/>
      <Route path='/Almacen' element={<Almacen/>}/>
      <Route path='/Contacto' element={<Contacto/>}/>
    </Routes>
    </BrowserRouter>    

    
      </header>
    </div>
  );
}

export default App;
