import React from 'react'

const Login = () => {

    const login=()=>{
        localStorage.setItem("login",true)
    }

  return (
    <div style={{ height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        
        <input type="email" placeholder="please enter your email"/>
        <input type="password" placeholder="please enter your password"/>
        <button onClick={login}>Click</button>
    </div>
  )
}

export default Login
