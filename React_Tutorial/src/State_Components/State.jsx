import React, { Component } from 'react'
import './State.css'

export default class State extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         Count : 0
      }
    }

    handleIncrement = () => {
        this.setState({
            Count: this.state.Count + 1
        })
    }

    handleDecrement = () => {
        this.setState({
            Count: this.state.Count - 1
        })
    }

  render() {
    const {Count} = this.state
    return (
      <div>
        <h1>Count : {Count}</h1>
        <button className='btn' onClick={this.handleIncrement} disabled = {Count === 10 ? true : false}>+</button>
        <button className='btn' onClick={this.handleDecrement} disabled = {Count === 0 ? true : false}>-</button>
      </div>
    )
  }
}
