const HomeButtons = ({
    setSelected,
    selected,
    setCards,
    setFilters,
    clicked,
    handleClick,
}) => {
    const goBack = () => {
        if (selected || clicked) {
            setCards([]);
            setSelected(false);
            setFilters((filters) => ({
                ...filters,
                page: 1,
                fetch: true,
                query: "",
            }));
            handleClick(!clicked);
        }
    };

    return (
        <div className="sidebar-buttons-container">
            <a
                onClick={goBack}
                className={
                    selected ? "home-button-not-selected" : "home-button"
                }
            >
                Home
            </a>
            <a title="Currently not available" className="review-button">
                Reviews
            </a>
            <a title="Currently not available" className="newreleases-button">
                New Releases
            </a>
        </div>
    );
};
export default HomeButtons;
