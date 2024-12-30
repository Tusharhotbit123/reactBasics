import React,{useContext} from "react";
import { CounterContext } from "./context/counterContext";

function App() {
  
   const state=useContext(CounterContext)

  return (

    <div>
      
       <h1>{state.counter}</h1>
       <button onClick={()=>state.setCounter((prev)=>prev+1)}>Change counter</button>    
    </div>
  );
}

export default App;
