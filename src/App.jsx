import './App.css'
import {RenderHeader} from './renders/header.jsx'
import RenderMain from './renders/main.jsx'
import {useFilters} from './hooks/filters.js'
import { useContext } from 'react'
import {ContextFilters} from './ContextFilteres.jsx'
import {ContextAddCart} from './ContextShop.jsx'
import {RenderCart} from './renders/cartShopping.jsx'

function App() {
const {ShopFilters} = useContext(ContextFilters)


 let {Productfilters} = useFilters({ShopFilters})


  return (
    <>
  <ContextAddCart>
    
    <RenderHeader />
    <RenderMain Productfilters={Productfilters}/>
    <RenderCart/>
    </ContextAddCart>
    </>
  )
}

export default App
