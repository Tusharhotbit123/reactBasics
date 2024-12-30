import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const [other,setOther]=useState(0);

  // Optimized Fibonacci calculation using memoization
  const fibonacci = (n) => {
    if (n <= 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  // Memoized Fibonacci result
  const result = useMemo(() => {
    const parsedNum = parseInt(num, 10);
    console.log("the function has been rendered")
    if (isNaN(parsedNum) || parsedNum < 0) return "Invalid input";
    return fibonacci(parsedNum);
  }, [num]);

  console.log("The root component has been re-rendered");

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
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          
          placeholder="Enter a number"
        />
        <p>
          The Fibonacci of {num} is: <strong>{result}</strong>
        </p>
        <p>the other number is {other}</p>
        <button onClick={()=>setOther(other+1)}>change other</button>
      </div>
    </div>
  );
}

export default App;
