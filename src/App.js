import React from 'react';
import Hello from './components/Hello';

// This function is a functional component that helps us split the UI into distinct parts.
// In this case, we are returning another component, <HelloReact/> from it.
export default function App() {
    return (
        <React.StrictMode>
            <Hello />
        </React.StrictMode>
    );
}
