import './App.css';
import React, { useState, useEffect } from 'react'
import { addDoc, collection, getDoc, increment } from "firebase/firestore"
import { db } from "./firebase-setup/firebase"
import axios from "axios";

function App() {

  const [counter, setCounter] = useState(-1);
  const [state, setState] = useState("");
  const [table, setTable] = useState([]);
  const [sto, setSto] = useState(0);
  const [sto1, setSto1] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  }

  useEffect(() => {
    console.log("hi")
    if (sto == 0) {
    db.collection("counter").doc("data")
        .onSnapshot(doc => setCounter(doc.data().number));
    db.collection('countries')
        .onSnapshot(snapshot => (
            setTable(snapshot.docs.map(doc => ({
              id: doc.id,
              data: doc.data()
            })))
        ))
    setSto(1);
    }
  }, [])

  useEffect(() => {
    if (counter > -1 && state != "") {
      db.collection("counter").doc("data")
      .update({number: counter});
      var total = 0
      if (table) {
        for (let i = 1; i < table.length; i++) {
          if (table[i].id == state) {
            total = table[i].data.number
          }
        }
      }
      if (sto1 == 0) {
        total = total - 1;
        setSto1(1);
      }
      db.collection("countries").doc(state)
      .update({number: total + 1})
    }
  }, [counter])

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setState(data.country_name);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getGeoInfo();
  }, []);

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
      <div className='Body'>
        <div>
          {table.map(entry =>(
            <div className="entries">
            <p> {entry.id} : {entry.data.number}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
