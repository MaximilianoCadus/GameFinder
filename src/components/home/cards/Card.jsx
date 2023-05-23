import "../../../css/home/card/card.css";
import { CardsContext } from "../../../contexts/CardsContext";
import { getGenre, formatDate } from "../../../utils/Utils";
import { useState, useEffect, useContext } from "react";
import Heart from "../../../assets/icon/heart.svg";
import Modal from "../modal/Modal";
import Nintendo from "../../../assets/icon/nintendo.svg";
import Pc from "../../../assets/icon/pc.svg";
import Playstation from "../../../assets/icon/playstation.svg";
import Xbox from "../../../assets/icon/xbox.svg";
import ImagePlaceHolder from "../../../assets/images/no-image-placeholder.jpg";
import { HamburContext } from "../../../contexts/HamburContext";
import { forwardRef } from "react";

const Card = forwardRef(({ game, index }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const { modalArrow, setModalArrow } = useContext(HamburContext);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        isOpen
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "");
    }, [isOpen]);

    const PLATFORM_IMAGES = {
        PlayStation: Playstation,
        Xbox: Xbox,
        PC: Pc,
        Nintendo: Nintendo,
    };

    const orderedPlatforms = ["PlayStation", "Xbox", "PC", "Nintendo"].filter(
        (name) => game.parent_platforms.find((p) => p.platform.name === name)
    );

    const platforms = orderedPlatforms.map((name) => {
        return (
            <img
                key={name}
                src={PLATFORM_IMAGES[name]}
                alt={name}
                className={name.toLowerCase()}
            />
        );
    });

    const text = game.description_raw;

    const { cardClass } = useContext(CardsContext);

    return (
        <>
            <article
                className={cardClass ? "card-container" : "card-container-sc"}
                ref={ref}
                onClick={
                    cardClass
                        ? () => {
                              setIsOpen(true);
                              setModalArrow(true);
                          }
                        : null
                }
            >
                <div className={cardClass ? "heart-icon" : "heart-icon-sc"}>
                    <img src={Heart} alt="Heart icon" />
                </div>
                <div
                    onClick={() => {
                        setIsOpen(true);
                    }}
                    className={cardClass ? "card-image" : "card-image-sc"}
                >
                    <img
                        src={game.background_image || ImagePlaceHolder}
                        alt={game.name}
                        loading="lazy"
                    />
                </div>
                <div className={cardClass ? "card-info" : "card-info-sc"}>
                    <div
                        className={cardClass ? "info-header" : "info-header-sc"}
                    >
                        <h2 className="header-title" title={game.name}>
                            {game.name}
                        </h2>
                        <h3 className="header-number">#{index + 1}</h3>
                    </div>
                    <div className={cardClass ? "" : "single-game-info-sc"}>
                        <div className={cardClass ? "info-top" : "info-top-sc"}>
                            <div
                                className={
                                    cardClass
                                        ? "info-release"
                                        : "info-release-sc"
                                }
                            >
                                <p
                                    className={
                                        cardClass
                                            ? "release-date-txt"
                                            : "release-date-txt-sc"
                                    }
                                >
                                    Release date:
                                </p>
                                <p
                                    className={
                                        cardClass
                                            ? "release-date"
                                            : "release-date-sc"
                                    }
                                >
                                    {formatDate(game.released)}
                                </p>
                            </div>
                            <div className={cardClass ? "" : "info-bottom-sc"}>
                                <div
                                    className={cardClass ? "" : "genres-txt-sc"}
                                >
                                    {cardClass ? null : "Genres:"}
                                </div>
                                <div className={cardClass ? "" : "genres-sc"}>
                                    {cardClass ? null : getGenre(game.genres)}
                                </div>
                            </div>
                            <div className="container-console-logos">
                                <div
                                    className={
                                        cardClass
                                            ? "logo-console-small"
                                            : "logo-console"
                                    }
                                >
                                    {platforms}
                                </div>
                            </div>
                        </div>
                        <div className={cardClass ? "info-bottom" : ""}>
                            <div className={cardClass ? "genres-txt" : ""}>
                                {cardClass ? "Genres:" : null}
                            </div>
                            <div
                                title={getGenre(game.genres)}
                                className={cardClass ? "genres" : ""}
                            >
                                {cardClass ? getGenre(game.genres) : null}
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            cardClass
                                ? "game-description"
                                : "game-description-sc"
                        }
                    >
                        <p>
                            {text === ""
                                ? "No description available"
                                : showMore
                                ? text
                                : `${text.substring(0, 551)}` + `...`}
                            {text === "" ? null : (
                                <button
                                    className="read-more"
                                    onClick={() => setShowMore(!showMore)}
                                >
                                    {showMore ? "Read less" : "Read more"}
                                </button>
                            )}
                        </p>
                    </div>
                </div>
            </article>
            {isOpen && (
                <Modal
                    setIsOpen={setIsOpen}
                    game={game}
                    setModalArrow={setModalArrow}
                    modalArrow={modalArrow}
                />
            )}
        </>
    );
});
export default Card;
