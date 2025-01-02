import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Home = () => {

   const navigate=useNavigate()
  const handleClick=()=>{
   navigate('/about',{state:{userid:1}})
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>About</button> 
    </div>
  )
}

export default Home
