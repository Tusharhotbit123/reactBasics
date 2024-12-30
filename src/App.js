import React, { useRef } from "react";

function App() {
  // Use useRef to store a mutable value that does not trigger a re-render
  const countRef = useRef(0);
  const inputRef=useRef(null)

  const handleClick = () => {
    // Update the value of countRef without triggering a re-render
    countRef.current = countRef.current + 1;

    if(countRef.current>=3)
    console.log("Updated countRef:", countRef.current);
  };

  //used to foucs on an element
  const handleFocus=()=>{
    console.log(inputRef)
    inputRef.current.focus()
  }

  return (
    <div>
      <input ref={inputRef} type="name" />
      <button onClick={handleFocus}>Focus</button>
      <h1>Click the button to update countRef without re-rendering</h1>
      <button onClick={handleClick}>Increment countRef</button>
      {/* Displaying the value of countRef directly */}
      <p>Current countRef value: {countRef.current}</p>
    </div>
  );
}

export default App;
