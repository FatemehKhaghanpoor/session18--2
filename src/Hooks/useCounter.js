import  { useState } from 'react'

const useCounter = () => {
  const[count,setCount]=useState(0);
  const increment=()=>{
    setCount(count+1);

  }
  const decrement=()=>{
    setCount(count-1);

  }
  const reset=()=>{
    setCount(0);

  }




  return {
    increment,
    decrement,
    count,
    reset
  }
}

export default useCounter
