import React from 'react'
import SearchForm from './SearchForm'
import Stories from './Stories'
import Buttons from './Buttons'
import { useGlobalContext } from './context'

function App() {
  
  const State = useGlobalContext()
 // console.log('data from context: ', State.hits[0].title)
  return (<div>

    <SearchForm/>
    <Buttons/>
    <Stories/>
    
    </div>)
}

export default App
