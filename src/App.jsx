
import './App.css'
import {RenderHeader} from './renders/header.jsx'
import RenderMain from './renders/main.jsx'
import {useFilters} from './hooks/filters.js'

function App() {
 let {ShopFilters,setShopFilters} = useFilters()
  
  return (
    <>

    <RenderHeader ShopFilters={ShopFilters} setShopFilters={setShopFilters} />
    <RenderMain/>

    </>
  )
}

export default App
