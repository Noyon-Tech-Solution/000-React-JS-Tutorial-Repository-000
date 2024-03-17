import React from 'react'

export default function Child(props) {

    const childData = "I am coming from Child house"
    props.onChildData(childData)
    
  return (
    <div>
      <p>{props.data}</p>
    </div>
  )
}
