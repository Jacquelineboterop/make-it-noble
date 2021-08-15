import React, {useState} from 'react';
import axios from 'axios';
import './styles.css'

function Login() {
  const [username, setUserName]= useState("");
  const [password, setPassword]= useState("");

  async function handleSubmit(event) {
   event.preventDefault();
   await axios({
     method: "POST",
     //baseUrl: "http://localhost:3000",
     url: "http://localhost:3000/login",
     data: {
       username,
       password
     }
   }).then(() => {
     setUserName("");
     setPassword("");
   }).catch(error => {
     console.log(error)
   })
  }
  
  return  (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset> 
          <input type="text" value={username} onChange={event => setUserName(event.target.value)} placeholder="Username"/>
        </fieldset>
        <fieldset> 
          <input type="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Password"/>
        </fieldset>
        <button type="submit">Ingresar</button>
      </form>
    </div>   
  )  
}

export default Login;
