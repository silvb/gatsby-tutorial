import React, { Component } from 'react'
import Link from 'gatsby-link'

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    this.setState({ count: this.state.count + 2 })
  }

  decrement() {
    this.setState({ count: this.state.count - 2 })
  }

  render () {
    return (
      <div>
        <h1>
          Counter
        </h1>
        <p>
         Current count: { this.state.count }
        </p>
        <button onClick={this.increment}>
          plus
        </button>
        <button onClick={this.decrement}>
          minus
        </button>
        <Link to="/">Go back …</Link>
      </div>
    )
  }
}

export default Counter