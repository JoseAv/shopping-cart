import { useState } from "react"

export function useFilters(){

    const [ShopFilters, setShopFilters]= useState({
        category:'all',
        minPrice: '0'
      })
    
    


    
    return ({ShopFilters,setShopFilters})


}






