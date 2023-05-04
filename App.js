import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Guestpage from "./pages/Guestpage";
import Signup from "./pages/Signup";
import GuestNavbar from "./components/GuestNavbar";
import Home from "./pages/Home";
import Studentnav from "./components/Studentnav";
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "./pages/firebase";
import { useEffect, useState } from "react";
import Helpquery from "./pages/Helpquery";
import Allmodules from "./pages/Allmodules";
import BrowseCourses from "./pages/BrowseCourses";



function App() {
  const [isUserloggedin, setIsUserloggedin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUserloggedin(!!user); // Update the state based on whether the user object is truthy or not
    });
    return () => unsubscribe(); // Unsubscribe from the listener when the component unmounts
  }, []);

  return (
    <div>
      <Allmodules/>
      
      {isUserloggedin ? <Studentnav/> : <GuestNavbar/>}
      <Routes>
        <Route path="/" element={<Guestpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home/>}/>
        <Route path ="/helpquery" element ={<Helpquery/>}/>
        <Route path="/BrowseCourses" element={<BrowseCourses/>}/>
      </Routes>
    </div>
  );
}

export default App;


