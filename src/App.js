import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Todo from "./pages/Todo";

function App() {

  return (

    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-[100vh] flex items-center justify-center">
      <Todo/>
    </div>
  );
}

export default App;
