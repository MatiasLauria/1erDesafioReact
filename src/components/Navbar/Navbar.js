import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/logo.png'
import { Link } from 'react-router-dom'



const Navbar = () => {
    return(
        <nav>
            <div className = 'logo'>
                <img src={logo} alt='logo' />
            </div>

            <div className='menu'>
                <Link to='/'>INICIO</Link>
                <Link to='/Frutas'>FRUTAS</Link>
                <Link to='/Verduras'>VERDURAS</Link>
                <Link to='/Almacen'>ALMACÉN</Link>
                <Link to='/Contacto'>CONTACTO</Link>
            </div>

            <div className='cart'>
                <CartWidget/>
            </div>
            

        </nav>
    )
}

export default Navbar