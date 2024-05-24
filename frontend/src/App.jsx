import "./App.css";
import React, { useState,useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
//import PrivateRoute from "./components/PrivateRouter";
import Hospital from "./pages/Hospital";
import Consultation from "./pages/Consultation";
import About from "./pages/About";
import {Toaster} from 'react-hot-toast'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Add this line to redirect the user to the home page after logging in
  useEffect(() => {
    if (isLoggedIn) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);
  return (
    <div className=" w-screen h-screen">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Toaster position="bottom-right" toastOptions={{duration:2000}}/>
      {/* <PrivateRoute  isLoggedIn={isLoggedIn}>
        <Home />
      </PrivateRoute> */}
      <Routes>
      <Route path="/home" element={<Home />} />
        
        <Route path="/Hospital" element={<Hospital />} />

        <Route path="/Consultation" element={<Consultation />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/SignUp"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>
      {/* <Chatbot setIsLoggedIn={setIsLoggedIn} /> */}
    </div>
  );
}

export default App;
