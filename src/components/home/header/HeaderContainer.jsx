import { useContext } from "react";
import "../../../css/home/header/header.css";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserInteraction from "./UserInteraction";
import User from "./User";
import HomeButtons from "../sidebar/HomeButtons";
import PopularTitle from "../sidebar/PopularTitle";
import DarkMode from "../../global/DarkMode";
import LogoutBtn from "./LogoutBtn";
import MobileSearch from "./MobileSearch";
import { HamburContext } from "../../../contexts/HamburContext";

const HeaderContainer = ({
    filters,
    setFilters,
    cards,
    setCards,
    setPlatforms,
    platforms,
    selected,
    setSelected,
    lastSearches,
    setLastSearches,
    deleteFirst,
    setDeleteFirst,
    oneCardOnly,
    setOneCardOnly,
}) => {
    const { clicked, handleClick } = useContext(HamburContext);
    return (
        <>
            <header className="header-home">
                <div className="header-content">
                    <Logo />
                    <SearchBar
                        cards={cards}
                        setCards={setCards}
                        setPlatforms={setPlatforms}
                        platforms={platforms}
                        filters={filters}
                        setFilters={setFilters}
                        selected={selected}
                        setSelected={setSelected}
                        lastSearches={lastSearches}
                        setLastSearches={setLastSearches}
                        deleteFirst={deleteFirst}
                        setDeleteFirst={setDeleteFirst}
                        oneCardOnly={oneCardOnly}
                        setOneCardOnly={setOneCardOnly}
                    />
                    <MobileSearch />
                    <UserInteraction />
                </div>
            </header>
            <div className={`initial ${clicked ? "active" : ""}`}>
                <User />
                <hr />
                <div className="container-hamburger">
                    <div className="hambur-options">
                        <HomeButtons
                            selected={selected}
                            setSelected={setSelected}
                            setFilters={setFilters}
                            setCards={setCards}
                            clicked={clicked}
                            handleClick={handleClick}
                        />
                        <PopularTitle />
                    </div>
                    <div className="container-log-dark">
                        <hr />
                        <div className="darkmode-mobile">
                            <DarkMode
                                className="dark-mode"
                                classTitle="dark-title"
                            />
                        </div>
                        <hr />
                        <div className="hambur-logout">
                            <LogoutBtn />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderContainer;
