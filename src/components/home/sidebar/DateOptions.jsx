import ThisWeekIcon from "../../../assets/icon/sidebar-star1.svg";
import ThisMonthIcon from "../../../assets/icon/sidebar-calender2.svg";
import CommingSoonIcon from "../../../assets/icon/sidebar-clock3.svg";

const DateOptions = () => {
    return (
        <div className="dateoptions-container">
            <div className="dateoptions-option">
                <img
                    src={ThisWeekIcon}
                    className="icon-sidebar"
                    alt="Star icon"
                />
                <a
                    title="Currently not available"
                    className="dateoptions-title"
                >
                    This week
                </a>
            </div>
            <div className="dateoptions-option">
                <img
                    src={ThisMonthIcon}
                    className="icon-sidebar"
                    alt="Calendar icon"
                />
                <a
                    title="Currently not available"
                    className="dateoptions-title"
                >
                    This month
                </a>
            </div>
            <div className="dateoptions-option">
                <img
                    src={CommingSoonIcon}
                    className="icon-sidebar"
                    alt="Clock icon"
                />
                <a
                    title="Currently not available"
                    className="dateoptions-title"
                >
                    Coming Soon
                </a>
            </div>
        </div>
    );
};
export default DateOptions;
