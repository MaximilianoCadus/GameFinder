const SliderDot = (props) => {
  const goToSlide = (slideIndex) => {
    props.setIndex(slideIndex);
  };

  return (
    <div
      className={
        props.index === props.indexActive
          ? "carousel-dot-active"
          : "carousel-dot"
      }
      onClick={() => goToSlide(props.index)}
    ></div>
  );
};

export default SliderDot;
