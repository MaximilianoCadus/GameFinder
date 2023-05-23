import { useContext } from "react";
import { HamburContext } from "../../../contexts/HamburContext";

const BurguerButton = () => {
    const { clicked, handleClick, modalArrow } = useContext(HamburContext);
    return (
        <div
            onClick={handleClick}
            className={`icon nav-icon ${clicked ? "open" : ""} ${
                modalArrow ? "modal-hambur" : ""
            }`}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default BurguerButton;
