import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState(
      {
        count: this.state.count + 1
      },
      () => console.log(this.state.count)
    );
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div>
        <p>Count - {this.state.count}</p>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
