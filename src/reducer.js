import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {

  if(action.type === 'SET_LOADING')
  {
      return ({...state, isLoading: true})
  }
  else if(action.type === 'SET_STORIES'){

    return ({...state, isLoading: false, hits: action.payload.hits, page: action.payload.page, nbPages: action.payload.nbPages})
   }
   else if(action.type === 'REMOVE_STORY'){

    return ({...state, hits: state.hits.filter((item)=> item.objectID!==action.payload.id)})
   }
   else if(action.type === 'HANDLE_SEARCH'){
     return ({...state, query: action.payload, page: 0})
    
   }
  else if(action.type === 'HANDLE_PAGE'){

    return({...state, page: action.payload})
  }
  else
  throw  new Error(`match not found  with ${action.type}`)
}
export default reducer
