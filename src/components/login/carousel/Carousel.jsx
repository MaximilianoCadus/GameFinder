import "../../../css/login/carousel/carousel.css";
import SliderContainer from "./SliderContainer";
import CarouselArrow from "./CarouselArrow";
import { useState } from "react";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    transition: "500ms",
  };

  return (
    <div className="carousel">
      <CarouselArrow
        direction={"left"}
        index={index}
        setIndex={setIndex}
        slideLength={6}
      />
      <div
        className="login-background"
        data-image-index={index}
        style={slideStyles}
      ></div>
      <CarouselArrow
        direction={"right"}
        index={index}
        setIndex={setIndex}
        slideLength={6}
      />
      <SliderContainer index={index} setIndex={setIndex} />
    </div>
  );
};

export default Carousel;
