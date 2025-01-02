import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {

  const params=useParams()

  return (
    <div>
      <p>this is the user details page</p>
      <h1>{params.id}</h1> 
      <h1>{params.category}</h1>     
    </div>
  )
}

export default UserDetails
