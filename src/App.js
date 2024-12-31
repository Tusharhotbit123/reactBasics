import React,{useContext} from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";
import Navbar from "./components/Navbar";

function App() {

  return (

    <div>
      <Router>
           <Navbar/>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/users" element={<Users/>}/>
           <Route path="/users/:id" element={<UserDetails/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
