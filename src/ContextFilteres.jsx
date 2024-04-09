import { createContext,useState } from "react";


// Creo Contexto
export const ContextFilters = createContext()


export function FiltersProvider ({children}){
    const [ShopFilters, setShopFilters]= useState({
        category:'all',
        minPrice: '0'
      })

return(

<ContextFilters.Provider value={{ShopFilters,setShopFilters}}>
    {children}
</ContextFilters.Provider>


)



}