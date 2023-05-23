import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

const Eye = () => {
    const { passToggle, eyeSrc, toggleClass } = useContext(AuthContext);

    const handleEyeClick = (e) => {
        e.preventDefault();
        passToggle();
    };

    return (
        <span onClick={handleEyeClick} className={toggleClass}>
            <img src={eyeSrc} alt="Eye" />
        </span>
    );
};

export default Eye;
