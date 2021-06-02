import React, { Component } from 'react';

function ChildComponent() {
  return (
    <div>
      <button onClick={props.greetHandler}>greet parent</button>
    </div>
  );
}

export default ChildComponent;
