import Signout from "../pages/Signout"
import React, { useState } from 'react';
import '../styling.css';
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

function SideNav() {
  const [navWidth, setNavWidth] = useState(0);

  function openNav() {
    setNavWidth(250);
  }

  function closeNav() {
    setNavWidth(0);
  }

  return (
    <>
      <div className="toprightnav">
        <Signout/>
      </div>
      <div id="mySidenav" className="sidenav" style={{ width: navWidth }}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
        <div>
          <Link to="/helpquery">Helpform</Link>
          <a href="">Services</a>
          <Link to ="/BrowseCourses">Browse Courses</Link>
          <a href="#">Contact</a>
        </div>
      </div>
  
      <div id="main">
        <span onClick={openNav}>open</span>
        {/* All other page content goes here */}
      </div>
    </>
  );
}

export default SideNav;


  