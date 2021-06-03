import React, { Component } from 'react';

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler('Child')}>greet parent</button>
    </div>
  );
}

export default ChildComponent;
