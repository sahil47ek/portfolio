import React, {useState} from "react";

export const Tooltip = ({tip,children}) => {
    const [isVisible, setIsVisible]= useState(false);
    return(
        <div className="tooltip-container relative" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
            {children}
            {isVisible && <div className="tooltip absolute mt-3 text-sm text-black px-1 bg-white"> {tip} </div>}
        </div>
    )
}