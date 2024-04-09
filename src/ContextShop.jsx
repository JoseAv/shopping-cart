import { createContext, useState } from "react";

export const ContextCart = createContext()

export function ContextAddCart({children}){
const [addCart,setAddCart] = useState([])



const incrementCart= (product) => {
   const findproducts = addCart.findIndex(e => e.id === product.id) 

    if(findproducts > 0){
        const newcart = addCart.map(e => e)
        newcart[findproducts].quatity +=1
        return setAddCart(newcart)
    }

    setAddCart(prev => [
        ...prev,
        {
            ...product,
            quantity:1
        }
    ])


}

const resetCart = () => setAddCart([])

return(

<ContextCart.Provider value={{addCart,setAddCart,resetCart,incrementCart}}>
{children}
</ContextCart.Provider>
)
}