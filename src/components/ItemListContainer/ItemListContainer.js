import './ItemListContainer.css'
import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import { Link } from "react-router-dom"
import ItemCount from '../ItemCount/ItemCount'


const ItemListContainer = ({saludo}) =>{

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(products =>{
            setProducts(products)
        })
    }, [])

    console.log(products)

    const onAdd = (cantidad) =>{
        console.log ( `${cantidad}`)
    }

    return(
        <div>
        <h2 style={{display:'flex', justifyContent:'center'}}>
            {saludo}
        </h2>

        <div className = 'cardContainer'>
            { products.map(prod => (
                <div className = 'card' key={prod.id}>
                    <img src={prod.img} alt="pic"/>
                   <div className='cardDetail'>
                        <h3>{prod.name}</h3>
                        <h5>${prod.price}</h5>
                        <Link to={`/detail/${prod.id}`}>Ver detalle</Link>
                        <ItemCount stock = {25} initial = {1} onAdd = {onAdd}/>
                    </div>
                </div>
            ))}
        </div>

        </div>
    )
}

export default ItemListContainer