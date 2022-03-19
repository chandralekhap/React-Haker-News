import React, { useContext, useEffect, useReducer } from 'react'

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'
import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {

  isLoading: true,
  hits : [],
  query: 'react',
  page: 0,
  nbPages : 0
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [state, dispatchFn] = useReducer(reducer, initialState)
 
  const fetchQuery = async (url)=>{

    dispatchFn({type: SET_LOADING});

    const response = await fetch(url)
    const data = await response.json();
    console.log('data ', data)
    dispatchFn({type: SET_STORIES, payload:{hits: data.hits, page: data.page, nbPages: data.nbPages}})
  }

  const removeStory = (id) =>{

    console.log(id)
    dispatchFn({type: REMOVE_STORY, payload: {id: id}})
  }

  const HandleSearch = (query) =>{
dispatchFn({type: HANDLE_SEARCH, payload: query})

  }

  const HandlePage = (value)=>{

    console.log('value in HandlePage: ', value)
    if(value<0 || value>50)
    {
      value =0;
      return
    }
    else{

      dispatchFn({type: HANDLE_PAGE, payload: value })
    }
   // 
  }
useEffect(()=>{

  fetchQuery(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
},[state.query, state.page])
  return <AppContext.Provider value={{...state, removeStory, HandleSearch, HandlePage}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
