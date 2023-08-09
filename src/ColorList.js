import React from "react";
import { Link } from "react-router-dom";
import { colors } from "./ColorData"

function ColorList() {
    return (
        <div>
            <h1>Welcome to the Color Factory!</h1>
            <Link to="/colors/new">Add your own color!</Link>
            <h4>Please choose a color.</h4>
            <ul>
                { colors.map((color) => (
                    <li key={ color.id }>
                        <Link to={ `/colors/${color.id}` }>{ color.name }</Link>
                    </li>
                )) }
            </ul>
        </div>
    );
}

export default ColorList;