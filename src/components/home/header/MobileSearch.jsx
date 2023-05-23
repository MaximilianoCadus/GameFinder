import { useContext } from "react";
import SearchIcon from "../../../assets/icon/mobile-search.svg";
import { HamburContext } from "../../../contexts/HamburContext";

const MobileSearch = () => {
    const { handleOpen } = useContext(HamburContext);
    return (
        <img
            onClick={handleOpen}
            className="mobile-search"
            src={SearchIcon}
            alt="search icon"
        />
    );
};

export default MobileSearch;
