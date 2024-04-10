import { useContext } from 'react'
import {ContextCart} from '../ContextShop'

export function RenderCart(){
const {addCart,resetCart,incrementCart,decrementProduct,deleteProduct} = useContext(ContextCart)
   
return(
    <>
   
    <h1 style={{textAlign:'center'}}>Carrito de Compra</h1>
    <div className="header-container">
        <div className="container">
        {addCart.length <= 0? <h2 style={{textAlign:'center'}}>Carrito Vacio</h2> : addCart.map((product) => (
            <div key={product.id} className='products-main'>
                <div className='container-delete' ><button onClick={()=> deleteProduct(product)}>x</button></div>
              <h3> {product.title} </h3>
               <p>{product.description}</p>
               <strong>Cantidad: {product.quantity}</strong>
               <div>
                <button onClick={()=> incrementCart(product)}>+</button>
                <button onClick={()=> decrementProduct(product)}>-</button>
               </div>

            </div>


        ))}
        </div >
        </div>
        {addCart.length <= 0 ? '' : <div className='cartShopping-resetbutoom'> <button  onClick={()=> resetCart()}>Reset</button></div>}
        
    </>



)
}