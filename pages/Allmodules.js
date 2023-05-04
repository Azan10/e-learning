import { useEffect } from "react";
import { ref, set,push } from "firebase/database";
import { db } from "./firebase";

function Allmodules() {
  useEffect(() => {
    const modules = [
    {modulecode:"ecs100",modulename: "Introduction to Programming", moduledescription:"In this module you will learn basics of programming and develop the required skills to learn basics of programming" },
    {modulecode:"ecs101",modulename: "Python for Algorithms" ,moduledescription:"In this module you will learn python to understand algorithms and datastructures and write as well as understand how to calulate time complexity of algorithms" },
    {modulecode:"ecs102",modulename: "Complete Java Course", moduledescription:"The aim of this module is to help you develop the java coding skills as java is one of the most popular languages used nowdays" },
    {modulecode:"ecs103",modulename: "Learn Frontend using HTML/CSS", moduledescription:"This module will cover the front end and basics of html and css and tell how to design and work on the frontend of the website.You will do various projects on them to boost your skills" },
    ];
    set(ref(db, "modules"), modules);
  }, []);

  return null;
}

export default Allmodules;
