let nextColorId = 4;
export const colors = [
    { id: "green", name: "Green", code: "#008000" },
    { id: "blue", name: "Blue", code: "#0000FF" },
    { id: "brown", name: "Brown", code: "#8B4513" },
];
export const addNewColor = (newColorName, newColorCode) => {
    const colorData = { id: newColorName, name: newColorName, code: newColorCode };
    colors.unshift(colorData);
    return newColorName;
};