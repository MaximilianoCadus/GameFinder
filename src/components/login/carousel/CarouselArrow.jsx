import "../../../css/login/carousel/carousel-arrow.css";
import ArrowLeft from "../../../assets/icon/arrow-left.svg";
import ArrowRight from "../../../assets/icon/arrow-right.svg";

const CarouselArrow = (props) => {
    const goToPrevious = () => {
        const isFirstSlide = props.index === 0;
        const newIndex = isFirstSlide ? props.slideLength - 1 : props.index - 1;
        props.setIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = props.index === props.slideLength - 1;
        const newIndex = isLastSlide ? 0 : props.index + 1;
        props.setIndex(newIndex);
    };

    return (
        <button
            className={
                props.direction === "left"
                    ? "arrow leftArrow"
                    : "arrow rightArrow"
            }
            onClick={props.direction === "left" ? goToPrevious : goToNext}
        >
            <img
                src={props.direction === "left" ? ArrowLeft : ArrowRight}
                alt={props.direction === "left" ? "left arrow" : "right arrow"}
            />
        </button>
    );
};

export default CarouselArrow;
