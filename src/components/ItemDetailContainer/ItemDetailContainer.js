import {useState, useEffect } from "react"
import { getProduct } from "../../asyncMock"
import { useParams } from "react-router"


const ItemDetailContainer = () =>{
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()

    

    useEffect(() => {
        getProduct(productId).then(product => {
            setProduct(product)
        }).finally(() =>{
            setLoading(false)
        })
    }, [])

    console.log(product)

    if(loading){
        return <h2>Loading...</h2>
    }

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h2>Detalle de Producto</h2>
            <h3>{product.name}</h3>
            <h4>{product.category}</h4>
            <h5>{product.price}</h5>
        </div>
    )
}

export default ItemDetailContainer