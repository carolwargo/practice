import React from "react";

export default function JSXexpression() {
    const name = "John";
    const thoughts = "is awesome!";

    return (
        <div className= "main-container">
            <div className="container">
                <div className="p-5 mb bg-light">
                   <h1>Hi, my name is ({name})</h1> 
                     <h2>My name has ({name.length}) letters</h2>
                     <h2>I think React ({thoughts})</h2>
                </div>
            </div>
        </div>
    )
}
