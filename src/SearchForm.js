import React from 'react'
import { useGlobalContext } from './context'
import {useRef} from 'react'

const SearchForm = () => {
  const state = useGlobalContext();
  const name= useRef();
  return ( <form className='search-form' onSubmit={(e) => e.preventDefault()}>
  <h2>search hacker news</h2>
  <input
    type='text'
    className='form-input'
   // value={state.query}
   ref= {name}
    onChange={(e) => state.HandleSearch(name.current.value)}
  />
</form>)
}



export default SearchForm
