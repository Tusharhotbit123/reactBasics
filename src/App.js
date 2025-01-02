import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import UserCard from "./components/UserCard";

function App() {

  return (

    <div>
      <Router>
        <Routes>
           <Route path="*" element={<PageNotFound/>}/>
           <Route path="/users" element={<UserCard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
