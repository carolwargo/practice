import React from "react";


export default function Hello() {
    const message = "Hello World! I am a React component.";
    return (
        <div className="container">
            <h1>{message}</h1>
        </div>
    );
}