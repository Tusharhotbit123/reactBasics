import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import CountSearch from "./components/CountSearch";
import Protected from "./components/Protected";
import Login from "./components/Login";

function App() {

  return (

    <div>
      <Router>
           {/* <Navbar/> */}
        <Routes>
           <Route path="/login" element={<Login/>}/>
           <Route path="/home" element={<Protected Component={Home}/>}/>
           <Route path="/about" element={<Protected Component={About}/>}/>
           <Route path="/users" element={<Users/>}/>
           <Route path="/users/:id/:category" element={<UserDetails/>} />
           <Route path="/search" element={<CountSearch/>}/>
           <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
