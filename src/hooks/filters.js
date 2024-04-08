import { useState } from "react"
import {products} from '../mocks/products.json'


export function useFilters(){

    const [ShopFilters, setShopFilters]= useState({
        category:'all',
        minPrice: '0'
      })
      console.log(ShopFilters.minPrice)

    const Productfilters = products.filter(e => {
      return (
        e.price   >=  ShopFilters.minPrice
        && 
        ShopFilters.category === 'all' ||
        ShopFilters.category === e.category
      
    )

    })



    
    return ({Productfilters,setShopFilters})


}






