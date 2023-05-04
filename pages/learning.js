import { useEffect, useState } from 'react';
import { push, ref, set,onValue,snapshot } from 'firebase/database';
import { db } from './firebase';

function Learning() {
  const [userText, setUserText] = useState('');
  const [data,setData]=useState("")
  const movies={
  Moviecode101:{Name:"Batman",actor:"christophernolan"},
  Moviecode102:{Name:"Spiderman", actor:"Tomholland"}
 


  }
  

  const handleInputChange = (event) => {
    setUserText(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
     console.log(data)
      const dataRef = ref(db, 'helpform');
      set(dataRef, movies)      //if I keep on adding value it gets replaced by previous value and only one object gets created
        .then(() => {
          console.log('Data added successfully!');
          setUserText('');
        })
        .catch((error) => {
          console.error('Error adding data: ', error);
        });
  
  };
  useEffect(() => {
    const dataRef = ref(db, 'helpform');
    onValue(dataRef, (snapshot) => {
  
   
        const movieData = snapshot.val();
        setData(movieData)
      });
  
  

   
  }, []);
  

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        User Text:
        <input type="text" value={userText} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Learning;
