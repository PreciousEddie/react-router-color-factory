import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewColor } from "./ColorData";

function ColorForm() {
    const [newColorName, setNewColorName] = useState("");
    const [newColorCode, setNewColorCode] = useState("");
    const navigate = useNavigate();
    const handleNameChange = (event) => {
        setNewColorName(event.target.value);
    };
    const handleCodeChange = (event) => {
        setNewColorCode(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const newColorId = addNewColor(newColorName, newColorCode);
        navigate(`/colors/${encodeURIComponent(newColorId)}`);
    };
    return (
        <div>
            <h1>Add New Color</h1>
            <form onSubmit={ handleSubmit }>
                <input
                    type="color"
                    value={ newColorCode }
                    onChange={ handleCodeChange }
                />
                <input
                    type="text"
                    placeholder="Color Name"
                    value={ newColorName }
                    onChange={ handleNameChange }
                />
                <button type="submit">Add Color</button>
            </form>
        </div>
    );
}

export default ColorForm;