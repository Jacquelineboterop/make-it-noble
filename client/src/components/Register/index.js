import React, {useState} from 'react';
import axios from 'axios';
import './styles.css'

function Register() {
  const [name, setName]= useState("");
  const [lastname, setLastName]= useState("");
  const [username, setUserName]= useState("");
  const [password, setPassword]= useState("");
  console.log(name);
  console.log(process.env.REACT_APP_SERVER_URL);

  async function handleSubmit(event) {
   event.preventDefault();
   await axios({
     method: "POST",
     //baseUrl: "http://localhost:3000",
     url: "http://localhost:3000/register",
     data: {
       name,
       lastname,
       username,
       password
     }
   }).then(() => {
     setName("");
     setLastName("");
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
         <input type="text" value={name} onChange={event => setName(event.target.value)} placeholder="Name"/>
        </fieldset>
        <fieldset> 
         <input type="text" value={lastname} onChange={event => setLastName(event.target.value)} placeholder="Last name"/>
        </fieldset>
        <fieldset> 
         <input type="text" value={username} onChange={event => setUserName(event.target.value)} placeholder="Username"/>
        </fieldset>
        <fieldset> 
         <input type="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Password"/>
        </fieldset>
        <button type="submit">Registrarse</button>
      </form>
    </div>   
  )  
}

export default Register;
