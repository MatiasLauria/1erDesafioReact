import cart from './assets/cart.png'

const CartWidget = () =>{
    return(
        <div>
            <img src={cart} alt= 'cart'/>
            <span style={{color: 'white'}}>0</span>
        </div>
    )
}

export default CartWidget