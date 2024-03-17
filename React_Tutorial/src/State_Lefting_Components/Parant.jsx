// Ai code gola takba Parant App.jsx a. akon onno code korta hocca ti akana raka hoica'//

import React from 'react'
import Child from './State_Lefting_Components/Child'

export default function Parant() {

  const parantData = "I am coming from parants house"
  const childHandler = (e) => {
    console.log(e)
  }

  return (
    <div>
    <Child data = {parantData} onChildData = {childHandler}/>
    </div>
  )
}