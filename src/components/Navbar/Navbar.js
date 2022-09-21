import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/logo.png'

const Navbar = () => {
    return(
        <nav>
            <div className = 'logo'>
                <img src={logo} alt='logo' />
            </div>

            <div className='menu'>
                <button>INICIO</button>
                <button>FRUTAS </button>
                <button>VERDURAS</button>
                <button>ALMACÉN</button>
                <button>CONTACTO</button>
            </div>

            <div className='cart'>
                <CartWidget/>
            </div>

        </nav>
    )
}

export default Navbar