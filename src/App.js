import './App.css';
import { useState,useEffect, use } from 'react';

function App() {

   const [data,setData]=useState({})
   useEffect(()=>{
       fetch("https://jsonplaceholder.typicode.com/users/2")
       .then(res=>res.json())
       .then(data=>setData(data))
       .catch(err=>console.log(err))
   },[])

  return (
    <div style={{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        
        {data?(

           <div>
            <h1>{data.name}</h1>
            <p>{data.phone}</p>
             <p>{data.email}</p>
             <p>{data.website}</p>
           </div>

        ):(
           <p>data is loading...</p>
        )}
       
    </div>
  );
}

export default App;
