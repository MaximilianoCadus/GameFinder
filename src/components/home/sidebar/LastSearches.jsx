import LastSearchesIcon from "../../../assets/icon/sidebar-lastsearches.svg";

const LastSearches = ({ selected, setSelected, setCards, lastSearches }) => {
    const selection = () => {
        setSelected(true);
        setCards(lastSearches);
    };

    return (
        <div className="lastsearches-container">
            <img
                src={LastSearchesIcon}
                className="icon-lastsearches-sidebar"
                alt="Last searches icon"
            />
            <div
                onClick={selection}
                className={
                    selected ? "last-searches-active" : "last-searches-title"
                }
            >
                Last searches
            </div>
        </div>
    );
};
export default LastSearches;
