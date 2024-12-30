import { useState, useCallback } from "react";
import "./App.css";


function Child({handleClick}){
  
  // console.log("the child has been rendered")

  return(
    <div>
        <button onClick={handleClick}>Click Me</button>
        
    </div>
  )
}

function App() {
  // const [num, setNum] = useState(0);
  const [other,setOther]=useState(0);

  console.log("the parent has been rendered")

  const handleClick=useCallback(()=>{
            console.log("the child has been rendered") 
  },[])
  
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
       <h1>Other Num:{other}</h1>
       <button onClick={()=>setOther(other+1)}>Change Other</button>
       <Child handleClick={handleClick}/>
      </div>
    </div>
  );
}

export default App;
