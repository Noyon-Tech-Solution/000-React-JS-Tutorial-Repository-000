import React, { Component } from 'react'
import Homepage from './Homepage'
import Loginpage from './Loginpage'

export default class condition extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLogIn: true
    }
  }

//   render() {

//     if (this.state.isLogIn) {
//       return <HomePage />
//     }
//     else {
//       return <Login />
//     }
//   }


// render() {
//   let element
//   if(this.state.isLogIn){
//     element = <HomePage/>
//   }
//   else{
//     element = <Login/>
//   }
//   return(
//     <div>
//       {element}
//     </div>
//   )
// }

render() {
  return <div>
    {this.state.isLogIn ? <Homepage/> : <Loginpage/>}
    </div>
}
}