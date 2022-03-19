import React from 'react'
import { useGlobalContext } from './context'
import {useState} from 'react'

const Buttons = () => {

  const State = useGlobalContext();
  const [counter, setCounter] = useState(0)
  return (<div className='btn-container'>

    <button onClick = {()=>{
       if(counter<0)
       {
         setCounter(0)
       return;
       }
       else
       {
         setCounter(prev=> prev-1)
       }
      
     return( State.HandlePage(counter))
     }} >
      
      Prev</button>

    <div>{State.page} of 50</div>
    <button onClick = {()=>{

      
        setCounter(prev=> prev+1)
      
     
     return ( State.HandlePage(counter))
     }}>Next</button>
  </div>)
}

export default Buttons
