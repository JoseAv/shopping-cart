import { useRef } from "react"

export function RenderHeader(ShopFilters,setShopFilters){
  let inputRef = useRef()
  console.log(setShopFilters)
  function handleFilterShop(){
    
    let newShopfilters = ShopFilters.ShopFilters.minPrice = inputRef.current.value
    setShopFilters({...ShopFilters.ShopFilters,newShopfilters})
  }
    
    return(
        <>
              <header className='header-container'>
      <div className='range-input'>
        <input type="range" ref={inputRef} onChange={handleFilterShop} min={0} max={2000} />
        <p>{ShopFilters.ShopFilters.minPrice}</p>
      </div>
      <div className='button-cart'>
        <select name='Eliga una opcion'>
        <option value="" selected disabled>Category</option>
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