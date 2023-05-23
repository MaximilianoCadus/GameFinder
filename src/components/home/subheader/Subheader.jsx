import "../../../css/home/subheader/subheader.css";
import { CardsContext } from "../../../contexts/CardsContext";
import { useContext } from "react";
import Column1Active from "../../../assets/icon/column1-active.svg";
import Column1Disabled from "../../../assets/icon/column1-disabled.svg";
import Column2Active from "../../../assets/icon/column2-active.svg";
import Column2Disabled from "../../../assets/icon/column2-disabled.svg";
import DarkMode from "../../global/DarkMode";
import Subtitle from "../subheader/Subtitle";
import Title from "../subheader/Title";
import ViewButton from "./ViewButton";

const Subheader = () => {
    const { changeView1, changeView2, cardClass } = useContext(CardsContext);

    return (
        <div className="container-title">
            <div className="title">
                <Title />
                <Subtitle />
            </div>
            <div className="mode">
                <DarkMode className="dark-mode" classTitle="dark-title" />
                <div className="thumbnail">
                    <ViewButton
                        value={{
                            event: changeView1,
                            src: cardClass ? Column1Active : Column1Disabled,
                        }}
                    />
                    <ViewButton
                        value={{
                            event: changeView2,
                            src: cardClass ? Column2Disabled : Column2Active,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Subheader;
