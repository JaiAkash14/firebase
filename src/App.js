import logo from './logo.svg';
import './App.css';
import db from './friebase';
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from 'react';

function App() {
  const [count, SetCount] = useState([])


  useEffect( ()=>{
    async function getData(){
      const q = collection(db, "names")

    const querySnapshot = await getDocs(q);
    let arr = []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      arr.push(doc.data())
    });
    SetCount(arr)
    }

    getData()
 
  },[])

  return (
    <div style={{ justifyContent: "center", alignItems: "center", display: 'flex', height: "100vh", width: "100vw" }}

      className="App">
      {count.map(item => (
        <div style={{ height: "100px", width: "100px", backgroundColor: "green" }}>
        {item.age}
          </div>
        ))}
          <div style={{ height: '80px', width: '80px', backgroundColor: "black" }}>

          
          </div>
        </div>
      );
}

      export default App;
