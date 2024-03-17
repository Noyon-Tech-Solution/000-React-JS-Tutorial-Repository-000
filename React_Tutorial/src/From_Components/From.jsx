import React, { useState } from 'react'
import './From.css'

export default function From() {

    // const[name, setName] = useState("")
    // const[email, setEmail] = useState("")
    // const[password, setPassword] = useState("")

    // const HandlerName = (e) =>{
    //     setName(e.target.value);
    // }

    // const HandlerEmail = (e) =>{
    //     setEmail(e.target.value);
    // }

    // const HandlerPassword = (e) =>{
    //     setPassword(e.target.value);
    // }

    // const HandlerSubmite = (e) =>{
    //     let userInfo = {
    //         name,
    //         email,
    //         password
    //     }
    //     console.log(userInfo)
    //     e.preventDefault();
    // }

    // Oporer niyom otoba nicar niom a kaj ta korbo : I think Nicer Niyon ta Best;

    const [user, setUser] = useState ({name: "", email: "",password: ""});
    const {name, email, password} = user;

    const ChangeHandler = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    const HandlerSubmite = (e) => {
        console.log(user);
        e.preventDefault();
    }


  return (
    <div>
      <form action="" onSubmit={HandlerSubmite}>

        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" value={name} onChange={ChangeHandler} required />
        </div>

        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={email} onChange={ChangeHandler} required />
        </div>

        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" value={password} onChange={ChangeHandler} required />
        </div>

        <div>
            <button type='submite'>Submite</button>
        </div>

      </form>

    </div>
  )
}
