import React from 'react'
import {useLocation} from 'react-router-dom'

const About = () => {

  const location=useLocation()

  const userid=location.state.userid

  return (
    <div>
      <h1>About</h1> 
       <h1>{userid}</h1>
    </div>
  )
}

export default About
