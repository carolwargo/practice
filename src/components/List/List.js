import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
export default function List (){
    const groceries = [
        {
            id: 1,
            name: "Milk",
            purchased: true
        },

        {
            id: 2,
            name: "Eggs",
            purchased: true
        },

        {
            id: 3,
            name: "Cheese",
            purchased: false
        },

        {
            id: 4,
            name: "Cake Mix",
            purchased: false
        },

        {
            id: 5,
            name: "Carrots",
            purchased: false
        },

        {
            id: 6,
            name: "Juice",
            purchased: true
        },

        {
            id: 7,
            name: "Steak",
            purchased: false
        },

        {
            id: 8,
            name: "Bacon",
            purchased: true
        }
    ];
  return (
    
    <div className="container">
    <h1 className="display-4">Grocery List</h1>
    <ul className="list-group">
      {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
      {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
      {groceries.map(item => (
        <li className="list-group-item" key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
    </div>
   
  );
}