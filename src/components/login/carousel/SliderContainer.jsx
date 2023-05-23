import "../../../css/login/carousel/slider.css";
import SliderDot from "./SliderDot";

const SliderContainer = (props) => {
  return (
    <div className="container-slider">
      <div className="slider">
        <SliderDot
          key={0}
          index={0}
          indexActive={props.index}
          setIndex={props.setIndex}
        />
        <SliderDot
          key={1}
          index={1}
          indexActive={props.index}
          setIndex={props.setIndex}
        />
        <SliderDot
          key={2}
          index={2}
          indexActive={props.index}
          setIndex={props.setIndex}
        />
        <SliderDot
          key={3}
          index={3}
          indexActive={props.index}
          setIndex={props.setIndex}
        />
        <SliderDot
          key={4}
          index={4}
          indexActive={props.index}
          setIndex={props.setIndex}
        />
        <SliderDot
          key={5}
          index={5}
          indexActive={props.index}
          setIndex={props.setIndex}
        />
      </div>
    </div>
  );
};

export default SliderContainer;
