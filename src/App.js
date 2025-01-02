import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import UserCard from "./components/UserCard";
import Form from "./components/Form";
import ArrayMethods from "./components/ArrayMethods";

function App() {

  return (

    <div>
      <Router>
        <Routes>
           <Route path="*" element={<PageNotFound/>}/>
           <Route path="/users" element={<UserCard/>}/>
           <Route path="/form" element={<Form/>}/>
           <Route path="/methods" element={<ArrayMethods/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
