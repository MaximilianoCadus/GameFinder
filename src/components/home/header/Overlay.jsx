const Overlay = ({ setActiveSearch }) => {
    return (
        <div
            className="search-overlay"
            onClick={() => {
                setActiveSearch(false);
            }}
        ></div>
    );
};

export default Overlay;
