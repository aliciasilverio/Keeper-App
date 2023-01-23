import React, { useState } from 'react';
import Login from "../routes/Login";
import Welcome from "../routes/SignUp";
import { NavLink } from 'react-router-dom'

import 
{ BrowserRouter as Router, Routes, Route} 
    from "react-router-dom";


function Header() {
    // const [token, setToken] = useState();

    // if(!token) {
    //     return <Login setToken={setToken} />
    //   }

return (
    
    <header>
        <h1>Keeper</h1>
        <div className="header-class">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/blogs">Blogs</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
      </ul>
        </div>
    </header>
)};



export default Header;

