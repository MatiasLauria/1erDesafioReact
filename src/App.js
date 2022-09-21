import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar'


function App() {
  return (
    <div className="App">
      <header className="App-header">

    <Navbar/>
    <ItemListContainer saludo={'¡Bienvenidos a Frozenshop!'}/>

      </header>
    </div>
  );
}

export default App;
