/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { HashRouter as Router, Route, Routes} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const Routers =  ( {isLoggedIn} ) => {
    return(
        <Router>
            <Routes>
                {isLoggedIn ? 
                <>
                    <Route exact path="/" element={<Home></Home>}></Route>
                </>
                : <>
                    <Route  exact path="/" element={<Auth></Auth>}></Route>
                </>}
            </Routes>
        </Router>
    )
}

export default Routers;