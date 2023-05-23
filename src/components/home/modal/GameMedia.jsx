import { fetchTrailer } from "../../../services/GameServices";
import { useState, useContext, useEffect } from "react";
import { SnackbarContext } from "../../../contexts/SnackbarContext";
import ImagePlaceHolder from "../../../assets/images/no-image-placeholder.jpg";

const GameMedia = ({ game }) => {
    const { setSnackbar } = useContext(SnackbarContext);

    const { name, short_screenshots } = game;

    const [loadingTrailer, setLoadingTrailer] = useState(true);
    const [trailer, setTrailer] = useState([]);

    useEffect(() => {
        fetchTrailer(game.id)
            .then((response) => {
                setTrailer(response);
                if (response !== undefined) {
                    setLoadingTrailer(false);
                }
            })
            .catch(() => {
                setSnackbar(
                    "Error! The trailer could not be loaded.",
                    "active"
                );
            });
    }, []);

    const imageOne = short_screenshots[1]
        ? short_screenshots[1].image
        : ImagePlaceHolder;
    const imageTwo = short_screenshots[2]
        ? short_screenshots[2].image
        : ImagePlaceHolder;
    const imageThree = short_screenshots[3]
        ? short_screenshots[3].image
        : ImagePlaceHolder;
    const imageFour = short_screenshots[4]
        ? short_screenshots[4].image
        : ImagePlaceHolder;
    const imageFive = short_screenshots[5]
        ? short_screenshots[5].image
        : ImagePlaceHolder;

    return (
        <div className="images-modal">
            <div className="video-preview">
                {loadingTrailer ? (
                    <img
                        src={imageFive}
                        alt={"Screenshot of " + name}
                        className="video"
                        loading="lazy"
                    />
                ) : (
                    <video className="video" controls poster={imageFive}>
                        <source src={trailer} type="video/mp4" />
                    </video>
                )}
            </div>
            <div className="images-modal-one">
                <img
                    src={imageOne}
                    alt={"Screenshot of " + name || "No image available"}
                    className="images-modal-width"
                    loading="lazy"
                />
                <img
                    src={imageTwo}
                    alt={"Screenshot of " + name || "No image available"}
                    className="images-modal-width"
                    loading="lazy"
                />
            </div>

            <div className="images-modal-two">
                <img
                    src={imageThree}
                    alt={"Screenshot of " + name || "No image available"}
                    className="images-modal-width"
                    loading="lazy"
                />
                <img
                    src={imageFour}
                    alt={"Screenshot of " + name || "No image available"}
                    className="images-modal-width"
                    loading="lazy"
                />
            </div>
        </div>
    );
};
export default GameMedia;
