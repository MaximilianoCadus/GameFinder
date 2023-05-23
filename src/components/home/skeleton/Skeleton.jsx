import "../../../css/home/skeleton/skeleton.css";

const Skeleton = () => {
  return (
    <div className="card-skeleton">
      <div className="title-skeleton"></div>
      <div className="container-sk">
        <div className="container-details-skeleton">
          <ol className="details-skeleton"></ol>
          <ol className="details-skeleton"></ol>
        </div>
        <div className="container-details-skeleton">
          <ol className="details-skeleton"></ol>
          <ol className="details-skeleton"></ol>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
