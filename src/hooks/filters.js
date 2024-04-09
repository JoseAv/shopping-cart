import {products} from '../mocks/products.json'
import { useContext } from 'react'
import {ContextFilters} from '../ContextFilteres'
export function useFilters(){

    const {ShopFilters}= useContext(ContextFilters)


    const Productfilters = products.filter(e => {
      return (
        e.price   >=  ShopFilters.minPrice
        && //Evaluar Condicion con Parenteris, para que se trabaje solo como una unidad
        (ShopFilters.category === 'all' || //sin parentesis se evaulara el precio y all || category 
        ShopFilters.category === e.category // Con parentesis se evaluara precio y categoria
        )
    )

    })



    
    return ({Productfilters})


}






