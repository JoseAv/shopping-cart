import { useContext } from 'react'
import {ContextCart} from '../ContextShop'


function RenderMain({Productfilters}){ 
    let productos = Productfilters.length > 0 
    const {incrementCart} = useContext(ContextCart)



  function handleDataId(product){
    incrementCart(product)
  }

    return(
        <>
        
        <main className='container'>
          
    {productos ? Productfilters.slice(0,8).map(product => (
      <div key={product.id} className='products-main'>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>{product.price}</h3>
      <button onClick={()=> handleDataId(product)}>Comprar</button>

      </div>

    )) : <p>No hay </p>}
  </main>
        
        </>



    )
}

export default RenderMain