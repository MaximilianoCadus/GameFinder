import "../../../css/home/header/header.css";
import "../../../css/home/header/search-bar.css";
import React, { useState, useRef } from "react";
import CloseIcon from "../../../assets/icon/close-icon.svg";
import SearchIcon from "../../../assets/icon/search-bar.svg";
import Dropdown from "./Dropdown";
import Overlay from "./Overlay";
import Dotload from "./Dotload";
import { useContext } from "react";
import { HamburContext } from "../../../contexts/HamburContext";
import { fetchGames } from "../../../services/GameServices";
let controller;

const SearchBar = ({
    setFilters,
    cards,
    setCards,
    platforms,
    setSelected,
    lastSearches,
    setLastSearches,
    deleteFirst,
    setDeleteFirst,
    oneCardOnly,
    setOneCardOnly,
}) => {
    const [activeSearch, setActiveSearch] = useState(false);
    const [input, setInput] = useState("");
    const [games, setGames] = useState();
    const [query, setQuery] = useState("");
    const [platformId, setPlatformId] = useState("");
    const [isSearchLoading, setIsSearchLoading] = useState(false);
    const [errorSearch, setErrorSearch] = useState(false);
    const { isSearch } = useContext(HamburContext);

    let searchTimer = useRef(null);
    const searchDelay = 500;

    const handleIcon = () => {
        setActiveSearch(true);
    };

    const handleClose = (event) => {
        event.stopPropagation();
        setActiveSearch(false);
    };

    const handleEnter = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            if (games) {
                setActiveSearch(false);
                setFilters({
                    query,
                    platformId,
                    page: 1,
                    fetch: false,
                });
                setCards(games);
                recordSearch(games);
                setSelected(false);
            }
        }
    };

    const handleSearch = (event) => {
        if (event.key === "Enter") {
            setIsSearchLoading(false);
        } else {
            setIsSearchLoading(true);
        }

        const [text, parentPlatform] = handleQuery(input.trim());

        clearTimeout(searchTimer.current);
        if (controller) {
            controller.abort();
        }
        controller = new AbortController();

        searchTimer.current = setTimeout(() => {
            fetchGames(text, 1, parentPlatform, controller)
                .then((games) => {
                    setErrorSearch(false);
                    setQuery(text);
                    setPlatformId(handleQuery(input)[1]);
                    setGames(games);
                })
                .catch(() => {
                    setErrorSearch(true);
                })
                .finally(() => {
                    setIsSearchLoading(false);
                });
        }, searchDelay);
    };

    const handleQuery = (query) => {
        const parentPlatform = platforms.find(
            (p) => query.toLowerCase() === p.name.toLowerCase()
        );

        if (parentPlatform) {
            return ["", parentPlatform.id];
        }

        return [query, ""];
    };

    const containsGame = (obj, list) => {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === obj.id) {
                return true;
            }
        }
        return false;
    };

    const recordSearch = (game) => {
        if (lastSearches.length === 0) {
            setLastSearches(game.slice(0, 2));
        } else if (oneCardOnly && !containsGame(game[0], lastSearches)) {
            setLastSearches([lastSearches, game[0]]);
            setDeleteFirst(true);
            setOneCardOnly(false);
        } else if (
            lastSearches.length === 2 &&
            !containsGame(game[0], lastSearches) &&
            deleteFirst
        ) {
            let arr = [lastSearches[1], game[0]];
            setLastSearches(arr);
        } else if (!containsGame(game[0], lastSearches) && !deleteFirst) {
            setLastSearches([lastSearches[0], game[0]]);
            setDeleteFirst(true);
        }
    };

    return (
        <>
            {activeSearch ? (
                <Overlay setActiveSearch={setActiveSearch} />
            ) : null}
            <form
                onFocus={handleIcon}
                className={`search-bar ${isSearch ? "search-bar-open" : ""}`}
            >
                {isSearchLoading ? <Dotload /> : null}
                <img src={SearchIcon} alt="Search icon" />
                <input
                    onInput={(e) => {
                        setInput(e.target.value);
                        setActiveSearch(true);
                    }}
                    onKeyUp={handleSearch}
                    onKeyDown={handleEnter}
                    className={`search-games ${
                        isSearch ? "search-games-open" : ""
                    }`}
                    type="text"
                    placeholder="Search games..."
                ></input>
                {activeSearch ? (
                    <img
                        src={CloseIcon}
                        onClick={handleClose}
                        alt="Close icon"
                        className="close-icon"
                    />
                ) : null}
                {activeSearch ? (
                    <Dropdown
                        gameList={games}
                        setCards={setCards}
                        setActiveSearch={setActiveSearch}
                        cards={cards}
                        errorSearch={errorSearch}
                        setSelected={setSelected}
                        lastSearches={lastSearches}
                        setLastSearches={setLastSearches}
                        containsGame={containsGame}
                        deleteFirst={deleteFirst}
                        setDeleteFirst={setDeleteFirst}
                        oneCardOnly={oneCardOnly}
                        setOneCardOnly={setOneCardOnly}
                    />
                ) : null}
            </form>
        </>
    );
};

export default SearchBar;
