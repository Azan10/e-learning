import { db } from "./firebase";
import { ref, onValue } from 'firebase/database';
import { useEffect, useState } from "react";

function BrowseCourses() {
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    const moduleRef = ref(db, "modules");

    onValue(moduleRef, (snapshot) => {
      const value = snapshot.val();
      setAllCourses(value)
    });
  }, []);

  console.log(allCourses);

  const moduleList = allCourses.map((module) => {
    return (
      <div key={module.modulecode}>
        <p>{module.modulecode}</p>
        <p>{module.modulename}</p>
        <p>{module.moduledescription}</p>
      </div>
    );
  });

  return (
    <div>
      {moduleList}
    </div>
  );
}

export default BrowseCourses;








