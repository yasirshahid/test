import React, { useState } from 'react';
import './App.css';

function App() {
  let [count,setcount]=useState(0);

  return (
    <div className="App">
      <h1>This is a Test counter {count}</h1>
      <button onClick={()=>setcount(++count)}> Value + </button>
      <button onClick={()=>setcount(--count)}> Value - </button>
      <br/>
      <button onClick={()=>setcount(0)}> Update </button>

    </div>
  );
}

export default App;
