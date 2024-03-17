import React, { useState } from 'react'

export default function Previous_Count() {
  const [count, setCount] = useState(0)
  const countPluse = () => {
    setCount((count) => count + 1)
    setCount((count) => count + 3)
    setCount((count) => count + 6)
  }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={countPluse}>+</button>
    </div>
  )
}
