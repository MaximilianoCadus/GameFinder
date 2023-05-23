const Dropdown = ({
    gameList,
    setCards,
    setActiveSearch,
    setSelected,
    lastSearches,
    setLastSearches,
    containsGame,
    deleteFirst,
    setDeleteFirst,
    oneCardOnly,
    setOneCardOnly,
    errorSearch,
}) => {
    const handleClick = (g) => {
        setCards(g);
        setActiveSearch(false);
        setSelected(false);

        if (lastSearches.length === 0) {
            setLastSearches(g);
            setOneCardOnly(true);
        } else if (oneCardOnly && !containsGame(g, lastSearches)) {
            setLastSearches([lastSearches, g]);
            setOneCardOnly(false);
            setDeleteFirst(true);
        } else if (
            lastSearches.length === 2 &&
            !containsGame(g, lastSearches) &&
            deleteFirst
        ) {
            setLastSearches([lastSearches[1], g]);
        } else if (!containsGame(g, lastSearches) && !deleteFirst) {
            setLastSearches([lastSearches[0], g]);
            setDeleteFirst(true);
        }
    };

    return (
        <div className="dropdown-container">
            <ol className="dropdown">
                {gameList ? (
                    gameList.map((g, index) => {
                        return (
                            <li
                                key={g.id}
                                onClick={() => {
                                    handleClick(g);
                                }}
                                className="dropdown-text"
                            >
                                {g.name}
                            </li>
                        );
                    })
                ) : (
                    <li className="dropdown-no-recent">
                        {errorSearch
                            ? "There's been an error"
                            : "No recent searches were found"}
                    </li>
                )}
                {gameList < 1 ? (
                    <li className="dropdown-no-recent">
                        No matches found for your search
                    </li>
                ) : null}
            </ol>
        </div>
    );
};

export default Dropdown;
