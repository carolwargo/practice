import React from 'react';
import Hello from './components/Hello';
import JSXVariables from './components/JSXVariables';
import Display from './components/Display';
import List from './components/List';
import Greeting from './components/Greeting';

// This function is a functional component that helps us split the UI into distinct parts.
// In this case, we are returning another component, <HelloReact/> from it.
export default function App() {
    return (
        <React.StrictMode>
            <Hello />
            <JSXVariables />
            <Display />
            <List />
            <Greeting />
        </React.StrictMode>
    );
}
