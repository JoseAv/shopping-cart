import './App.css'
import {RenderHeader} from './renders/header.jsx'
import RenderMain from './renders/main.jsx'
import {useFilters} from './hooks/filters.js'
import { useContext } from 'react'
import {ContextFilters} from './ContextFilteres.jsx'


function App() {
const {ShopFilters} = useContext(ContextFilters)
 let {Productfilters} = useFilters({ShopFilters})


  return (
    <>

    <RenderHeader />
    <RenderMain Productfilters={Productfilters}/>

    </>
  )
}

export default App
