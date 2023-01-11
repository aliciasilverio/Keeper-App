import Login from "../users/Login";
import React, { useState } from 'react';
import Welcome from "../users/Welcome";

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

        <a href=
            {<Router>
                <Routes>
                    {Login}<Route exact path='../users/Login' element={<Login/>} />
                </Routes>
            </Router>}>
                Log In
        </a>

        <a href=
            {<Router>
                <Routes>
                    {Welcome}<Route exact path='../users/Welcome' element={<Welcome/>} />
                </Routes>
            </Router>}>
                Sign Up
        </a>
    </header>
)};



export default Header;

