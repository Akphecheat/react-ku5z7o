import React, { Component } from 'react';

class EventBind extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello'
    };
  }
  // ** class property as arrow function binding **
  clickHandler = () => {
    this.setState({
      message: 'Hi'
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={this.clickHandler}>Change</button>
      </div>
    );
  }
}

export default EventBind;

// ** Binding in the class constructor method **

// class EventBind extends Component {
//   constructor() {
//     super();
//     this.state = {
//       message: 'Hello'
//     };

//     this.clickHandler = this.clickHandler.bind(this);
//   }

//   clickHandler(){
//     this.setState({
//       message: 'Hi'
//     })
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.message}</p>
//         <button onClick= { this.clickHandler}>Change</button>
//       </div>
//     );
//   }
// }

// export default EventBind;
