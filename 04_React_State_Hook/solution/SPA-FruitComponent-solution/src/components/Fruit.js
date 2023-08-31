import React, { useState } from "react";

const colors = ["red", "blue", "green", "yellow", "purple"];

export default function Fruit({ type, deleteClickHandler }) {
    const getRandomColor = () => {
        let newColor = Math.floor(Math.random() * colors.length);
        return colors[newColor];
    };

    const [color, setColor] = useState(getRandomColor());

    // task
    const changeColor = () => {
        setColor(getRandomColor());
    };

    return (
        <div data-testid="fruit">
        <h3 style={{ color:color}}>{type}</h3>
        {/* task: create a button that randomly changes the color to either red, blue, green, yellow or purple */}{" "}
        <p><button onClick={deleteClickHandler}>delete</button> <button onClick={changeColor}>change color</button> </p>
        </div>
    );
}
