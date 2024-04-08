import { useCallback, useState } from "react"
import debounce from 'just-debounce-it'


export function RenderHeader({setShopFilters}){
console.log(setShopFilters)
 const [valueFil,setValufilt] = useState(0)
  

const handelFilter = useCallback(
  debounce((newValue)=> {
  setShopFilters((prev) => ({...prev,minPrice:newValue}))
},1000),
[valueFil.minPrice]
)

  function handleFilterShop(e){
    let newValue = e.target.value
    setValufilt(newValue)
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
        <p>{valueFil}</p>
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