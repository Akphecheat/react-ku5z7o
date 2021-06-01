import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello {this.props.name} job is {this.props.job}</h1>;
  }
}

export default Welcome;
