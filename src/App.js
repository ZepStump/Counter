import './App.css';
import React, { useState, useEffect } from 'react'
import { addDoc, collection, getDoc } from "firebase/firestore"
import { db } from "./firebase-setup/firebase"

function App() {

  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  }

  useEffect(() => {
    setCounter(db.collection("counter").doc('data').number);
  }, [counter])

  return (
    <div className="App">
      <div className='Header'>
        <div className='Header_text'> 
          <div> LightHall Challenge Level 1 </div>
        </div>
        <div className='Main_text'> 
          <div> Click here to increase the counter </div>
        </div>
        <div className='counter_var'>
          <div> Counter: {counter}</div>
        </div>
        <button className='button' onClick={incrementCounter}> 
          Click me ! 
        </button>
      </div>
    </div>
  );
}

export default App;
