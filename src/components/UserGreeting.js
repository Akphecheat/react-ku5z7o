import React, { Component } from 'react';

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: true
    };
  }

  render() {
    let message;
    if (this.state.isLoggedin) {
      message = <div>Hello Bona</div>;
    } else {
      message = <div>Welcome guess</div>;
    }
    return message;

    // return this.state.isLoggedin ? (
    //   <div>Hello Bona</div>
    // ) : (
    //   <div>Hello guess</div>
  }
}

export default UserGreeting;
