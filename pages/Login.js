import '../styling.css';
import React,{useState} from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

function Login(){
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleForm = (event) => {
    event.preventDefault();
  
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  }

  return (
    <div className="loginBox">
      <img className="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px" alt="User icon" />
      <h3>Sign in here</h3>

      <form onSubmit={handleForm}>
        <div className="inputBox">
          <label htmlFor="uname">Username</label>
          <input id="uname" type="text" name="Username" placeholder="Username" onChange={handleEmail} required />
          <label htmlFor="pass">Password</label>
          <input id="pass" type="password" name="Password" placeholder="Password" onChange={handlePassword} required/>
        </div>
        <input type="submit" value="Login" />
        <div>
        {error && <p>{error}</p>}
        </div>
      </form>
    </div>
  );
}

export default Login;

  
  