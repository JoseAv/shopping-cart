import { useCallback, useContext } from "react"
import debounce from 'just-debounce-it'
import {ContextFilters} from '../ContextFilteres'

export function RenderHeader(){
  const {ShopFilters,setShopFilters} = useContext(ContextFilters)
  

const handelFilter = useCallback(
  debounce((newValue)=> {
  setShopFilters((prev) => ({...prev,minPrice:newValue}))
},1000),
[ShopFilters.minPrice]
)

  function handleFilterShop(e){
    let newValue = e.target.value
    handelFilter(newValue)
    
  }
    

  function handleSelect(e){
    let newCategory = e.target.value
    setShopFilters(prev => ({...prev,category:newCategory}))
  }

    return(
        <>
              <header className='header-container'>
      <div className='range-input'>
        <input type="range" onChange={handleFilterShop} min={0} max={2000} />
        <p>{ShopFilters.minPrice}</p>
      </div>
      <div className='button-cart'>
        <select name='Eliga una opcion' onChange={handleSelect}>
        <option value="all">all</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
          <option value="fragrances">Fragrances</option>
        </select>
        <button >carrito</button>
      </div>


    </header>
        
        </>

    )
}