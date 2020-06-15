import React, { useState } from 'react';
import './App.css';
import Message from './message';

function App() {
  let [count,setcount]=useState(0);

  return (
    <div className="App">
      <Message counter={count}/>
      <button onClick={()=>setcount(++count)}> Value + </button>
      <button onClick={()=>setcount(--count)}> Value - </button>
      <br/>
      <button onClick={()=>setcount(0)}> Update </button>

    </div>
  );
}

export default App;
