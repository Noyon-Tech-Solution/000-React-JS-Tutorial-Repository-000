import React, { Component } from 'react'

export default class Eventhandaler extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         ChangValue : ""
      }
    }
    
    eventOnChang = (e) => {
        this.setState({
            ChangValue : e.target.value
        }
        // , () => {
        //     console.log(this.state.ChangValue)
        // }
        )
    }

   render(){
    return(
        <div>
            <input type="text" onChange={this.eventOnChang}/>
            <h1>{this.state.ChangValue}</h1>
        </div>
    )
   }
}