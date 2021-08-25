import React from 'react';
import {useHistory} from 'react-router-dom';
import { IoAddCircle } from 'react-icons/io5';
import './styles.css'

function Boton() {
  const history = useHistory();
  function handleModal() {
    history.push("/newpost");
  }
  return  (
    <div>
      <button onClick={handleModal} className="button">
        <IoAddCircle size="46px"></IoAddCircle> 
      </button> 
    </div>
  )
}

export default Boton;
