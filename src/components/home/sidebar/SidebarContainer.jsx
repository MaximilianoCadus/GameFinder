import "../../../css/home/sidebar/sidebar.css";
import HomeButtons from "./HomeButtons.jsx";
import DateOptions from "./DateOptions.jsx";
import PopularTitle from "./PopularTitle.jsx";
import LastSearches from "./LastSearches.jsx";
import BestOfTheYear from "./BestOfTheYear.jsx";
import { HamburContext } from "../../../contexts/HamburContext";
import { useContext } from "react";

const SidebarContainer = ({
    selected,
    setSelected,
    cards,
    setCards,
    lastSearches,
    setLastSearches,
    setFilters,
}) => {
    const { clicked, handleClick } = useContext(HamburContext);

    return (
        <div className="sidebar-home">
            <div className="sidebar-content">
                <HomeButtons
                    selected={selected}
                    setSelected={setSelected}
                    setFilters={setFilters}
                    setCards={setCards}
                    clicked={clicked}
                    handleClick={handleClick}
                />
                <DateOptions />
                <PopularTitle />
                <LastSearches
                    selected={selected}
                    setSelected={setSelected}
                    cards={cards}
                    setCards={setCards}
                    lastSearches={lastSearches}
                    setLastSearches={setLastSearches}
                />
                <BestOfTheYear />
            </div>
        </div>
    );
};
export default SidebarContainer;
