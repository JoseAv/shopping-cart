
import './App.css'
import {RenderHeader} from './renders/header.jsx'
import RenderMain from './renders/main.jsx'
import {useFilters} from './hooks/filters.js'

function App() {
 let {Productfilters,setShopFilters} = useFilters()


  return (
    <>

    <RenderHeader  setShopFilters={setShopFilters} />
    <RenderMain Productfilters={Productfilters}/>

    </>
  )
}

export default App
