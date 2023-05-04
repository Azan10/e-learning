import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { ref, onValue } from "firebase/database";




function Home() {
  const [userId, setUserId] = useState(null);
  const [fullName, setFullName] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUserId(user.uid);
     
      } else {
        // User is signed out
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (userId) {
      const userRef = ref(db, `users/${userId}/fullName`);
      onValue(userRef, (snapshot) => {
        const name = snapshot.val();
        setFullName(name);
     
      });
    }
  }, [userId]);

  return (
    <div>
    
        <p className="loggedin-name">
           {fullName ? fullName : "User"}
     

           
          
        </p>
   
      
    </div>
  );
}

export default Home;







