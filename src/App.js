import './App.css';
import { useState,useEffect } from 'react';
import Component from "./components/Component"

function App() {

  const [data,setData]=useState(0)

  const handleClick=()=>{
    setData(data+1);
  }

  return (
    <div style={{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h1>{data} is the number of data points</h1>
        <button style={{height:"50px",width:"100px",borderRadius:"5px",backgroundColor:"black",color:"white"}} onClick={handleClick}>Click</button>
       
    </div>
  );
}

export default App;
