import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route exact path="checkout" element={<Checkout />}></Route>
                    <Route exact path="login" element={<Login />}></Route>
                    <Route exact path="/" element={<Header />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
