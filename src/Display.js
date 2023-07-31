import React from 'react'

export default function Display() {
    let x=30;
    let y=20;
  return (
    <div>
        <h1>Evaluating expression</h1>
        <h4>{x}{">"}{y}:{x>y?"True":"False"}</h4>
    </div>
  )
}
