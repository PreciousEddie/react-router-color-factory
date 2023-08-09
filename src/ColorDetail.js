import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { colors } from "./ColorData"
import "./ColorDetail.css"

function ColorDetail() {
    const { colorId } = useParams();
    const color = colors.find(color => color.id === colorId);
    if (!color) return <Navigate to="/colors" />
    return (
        <div className="ColorDetail">
            { color ? (
                <>
                    <div
                        style={ {
                            backgroundColor: color.code,
                            width: "1000vw",
                            height: "1000vh",
                        } }
                        className="ColorDetail-color"
                    >
                        <h1>This is { color.name }.</h1>
                        <h1>Isn't it amazing!</h1>
                        <Link to="/colors">Back to Colors</Link>
                    </div>
                </>
            ) : (
                <h2>Color not found</h2>
            ) }
        </div>
    );
}

export default ColorDetail;