import React from 'react'

export default function Stop_Propagation() {

    const parantHandle = (event) => {
        console.log(event, "Parant_Button");
    }

    const chileHandle = (event) => {
        event.stopPropagation();
        console.log(event, "Child_Button");
    }

  return (
    <div onClick={parantHandle}>
      <h1>Welcome in my Company</h1>
      <button onClick={chileHandle}>Chile_Button</button>
    </div>
  )
}
