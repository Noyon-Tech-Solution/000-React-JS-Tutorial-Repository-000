import React, { Component } from 'react'

export default class Class_Hook extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    HandleIncrement = () => {
        this.setState({
            count : this.state.count + 1
        })
    }
    
  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.HandleIncrement}>Increse</button>
      </div>
    )
  }
}
