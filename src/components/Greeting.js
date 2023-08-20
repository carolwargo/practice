// We have to first import `useState` with React in order to take advantage of the hook
import React, { useState } from 'react';

export default function Greeting() {
  // Declare a state variable `greeting` using `useState`
  // Give the method to update it a name, `setGreeting`
  // useState accepts one argument for the default or initial value of the state variable. In our case, we set it to "Welcome the following students to class!".
  const [greeting] = useState(
    'Welcome the following students to class!'
  );
  // Convert `group` to a state variable using the `useState` hook.
  // Set to an initial value to an array including three students in your class. (ex. ["John", "Grace", "Jared"])
  const [group] = useState(['John', 'Grace', 'Jared']);

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">State activity!</div>
      <div className="card-body">
        {/* Render the `greeting` state variable */}
        <p className="card-text">{greeting}</p>
        {/* 2 POSSIBLE METHODS TO RENDER */}
        {/* METHOD #1 Render each member from the `group` array 
        <ul>
          <li>{group[0]}</li>
          <li>{group[1]}</li>
          <li>{group[2]}</li>
        </ul>*/}
        {/* METHOD #2 USE MAP as follows: */}
        <ul>
        {group.map((member, index)=> (
          <li key={index}>{member}</li>
        ))} 
        </ul> 
      </div>
    </div>
  );
}


