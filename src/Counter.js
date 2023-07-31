import React from 'react'
import { useState } from 'react'
export default function Counter(props) {
    const [counter,setCounter]=useState(1);
    const Increment=()=>{
        setCounter(counter+1);
    };
    const Decreament=()=>{
        if(counter===0){
            window.alert("card is empty");
        }
        else{
            setCounter(counter-1);
        }
    }
  return (
    <div>
        <h1>Counter: {counter}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decreament}>Decreament</button>
    </div>
  );
}
