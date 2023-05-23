import BestOfTheYearIcon from "../../../assets/icon/sidebar-bestoftheyear.svg";

const BestOfTheYear = () => {
    return (
        <div className="bestoftheyear-container">
            <img
                src={BestOfTheYearIcon}
                className="icon-bestoftheyear-sidebar"
                alt="Best of the year icon"
            />
            <a title="Currently not available" className="bestoftheyear-title">
                Best of the year
            </a>
        </div>
    );
};
export default BestOfTheYear;
