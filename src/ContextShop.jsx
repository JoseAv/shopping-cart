import { createContext, useState } from "react";

export const ContextCart = createContext()

export function ContextAddCart({children}){
const [addCart,setAddCart] = useState([])



const incrementCart= (product) => {
    
   const findproducts = addCart.findIndex((e) => e.id === product.id) 
    
    if(findproducts >= 0){
        const newcart = structuredClone(addCart)
        newcart[findproducts].quantity +=1
         setAddCart(newcart)
         return
    }

    setAddCart(prev => [
        ...prev,
        {
            ...product,
            quantity:1
        }
    ])
}

const decrementProduct =(product) => {
    if(product.quantity <= 0) return
const findProduct = addCart.findIndex(e => e.id === product.id)

    const newproduct = addCart.map(e => e)
    newproduct[findProduct].quantity -=1
    setAddCart(newproduct)

}

const deleteProduct=(product) => {


    const ProducInCart = addCart.filter(e => e.id !== product.id)
    setAddCart(ProducInCart)

}


const resetCart = () => setAddCart([])

return(

<ContextCart.Provider value={{addCart,setAddCart,resetCart,incrementCart,decrementProduct,deleteProduct}}>
{children}
</ContextCart.Provider>
)
}