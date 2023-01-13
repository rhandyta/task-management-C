import React from "react";

function LabelCategory({ title }) {
    let color = "";
    switch (title) {
        case "UX DESIGNER":
            color = "green";
            break;
        case "UI DESIGNER":
            color = "blue";
            break;
        case "BACK END":
            color = "red";
            break;
        case "FRONT END":
            color = "yellow";
            break;
        default:
            break;
    }
    return (
        <label
            className={`bg-${color}-100 px-3 py-1 rounded-full font-medium text-${color}-500 text-sm`}
        >
            {title}
        </label>
    );
}

export default LabelCategory;
