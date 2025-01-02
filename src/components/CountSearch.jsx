import React from 'react'
import { useSearchParams } from 'react-router-dom'

const CountSearch = () => {

    const [countSearch,setCountSearch]=useSearchParams()

    const count=parseInt(countSearch.get("count")||"0",10)

    const increment=()=>{
        setCountSearch({count:count+1})

    }

    const decrement=()=>{

        setCountSearch({count:count-1})

    }

  return (
    <div>

        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      
    </div>
  )
}

export default CountSearch
