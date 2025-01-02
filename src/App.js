import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

function App() {

  return (

    <div>
      <Router>
        <Routes>
           <Route path="*" element={<PageNotFound/>}/>
           <Route path="/users" element={<UserCard/>}/>
           <Route path="/form" element={<Form/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
