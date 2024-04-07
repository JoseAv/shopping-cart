import { useState } from 'react'
import './App.css'
import {products} from './mocks/products.json'
import { useRef } from 'react'


function App() {
  const [ShopFilters, setShopFilters]= useState({
    category:'all',
    minPrice: '0'
  })

let productos = products.length > 0
let inputRef = useRef()

function handleFilterShop(){
  console.log(inputRef.current.value)

}

  
  return (
    <>

    <header className='header-container'>
      <div className='range-input'>
        <input type="range" ref={inputRef} onChange={handleFilterShop} value={inputRef.current}/>
        <p>{ShopFilters.minPrice}</p>
      </div>
      <div className='button-cart'>
        <button >carrito</button>
      </div>


    </header>


    <main className='container'>
    {productos ? products.slice(0,10).map(e => (
      <div key={e.id} className='products-main'>
      <h2>{e.title}</h2>
      <p>{e.description}</p>
      <h3>{e.price}</h3>
      <button>Comprar</button>

      </div>

    )) : <p>No hay </p>}
  </main>

    </>
  )
}

export default App
