import { useState } from "react";
import ChatBubbles from "../../../assets/icon/chat-bubbles.svg";
import Heart from "../../../assets/icon/heart.svg";
import ThumbsUp from "../../../assets/icon/thumbs-up.svg";
import Upload from "../../../assets/icon/upload.svg";
import Nintendo from "../../../assets/icon/nintendo.svg";
import Pc from "../../../assets/icon/pc.svg";
import Playstation from "../../../assets/icon/playstation.svg";
import Xbox from "../../../assets/icon/xbox.svg";
import {
    formatDate,
    getDevelopers,
    getGenre,
    getPlatforms,
    getPublishers,
} from "../../../utils/Utils";
import GameDetailsInfo from "./GameDetailsInfo";

const GameDetails = ({ game }) => {
    const [list, setList] = useState(false);
    const [link, setLink] = useState(false);

    const PLATFORM_IMAGES = {
        PlayStation: Playstation,
        Xbox: Xbox,
        PC: Pc,
        Nintendo: Nintendo,
    };

    const orderedPlatforms = ["PlayStation", "Xbox", "PC", "Nintendo"].filter(
        (name) => game.parent_platforms.find((p) => p.platform.name === name)
    );

    const platformLogos = orderedPlatforms.map((name) => {
        return (
            <img
                key={name}
                src={PLATFORM_IMAGES[name]}
                alt={name}
                className="icon"
            />
        );
    });

    const {
        name,
        formatedReleased = formatDate(game.released),
        description_raw: description,
        website,
        esrb_rating,
        chainedPlatforms = getPlatforms(game.platforms),
        chainedPublishers = getPublishers(game.publishers),
        chainedGenres = getGenre(game.genres),
        chainedDevelopers = getDevelopers(game.developers),
    } = game;

    const ageRating = esrb_rating
        ? esrb_rating.name
        : "No age rating was available";

    return (
        <div className="modal-text">
            <div className="icons-modal">{platformLogos}</div>

            <div className="title-modal">
                <h2>{name || "No name available"}</h2>
            </div>

            <div className="extra-info-modal">
                <p>{formatedReleased}</p>
                <div>
                    <span className="first-letter">#1</span>TOP 2021
                </div>
                <div>
                    <span className="first-letter">#9</span> RPG
                </div>
            </div>

            <div className="game-info-modal">
                <p>{description || "No description available"}</p>
            </div>

            <div className="links-modal">
                <div className="links-modal-wishlist">
                    <a href="#">Add to wishlist</a>
                    <div className="heart-icon-modal">
                        <img src={Heart} alt="Heart icon" />
                    </div>
                </div>
                <div className="links-modal-purchase">
                    <a href="#">Purchase</a>
                </div>
            </div>
            <div className="details-modal">
                <div className="left-column">
                    <GameDetailsInfo
                        key={0}
                        list={list}
                        setList={setList}
                        title={"Platforms"}
                        uList={chainedPlatforms}
                    />
                    <GameDetailsInfo
                        key={1}
                        title={"Release date"}
                        text={formatedReleased}
                    />
                    <GameDetailsInfo
                        key={2}
                        list={list}
                        setList={setList}
                        uList={chainedPublishers || "No publisher was found"}
                        title={"Publisher"}
                    />
                    <GameDetailsInfo
                        key={3}
                        link={link}
                        setLink={setLink}
                        webLink={website}
                        title={"Website"}
                    />
                </div>
                <div className="right-column">
                    <GameDetailsInfo
                        key={4}
                        list={list}
                        setList={setList}
                        title={"Genre"}
                        uList={chainedGenres || "No genre was found"}
                    />
                    <GameDetailsInfo
                        key={5}
                        list={list}
                        setList={setList}
                        title={"Developer"}
                        uList={chainedDevelopers || "No developer was found"}
                    />
                    <GameDetailsInfo
                        key={6}
                        title={"Age rating"}
                        text={ageRating}
                    />
                    <div className="details-icons-modal">
                        <img src={ChatBubbles} alt="Chat bubbles icon" />
                        <img src={ThumbsUp} alt="Thumbs up icon" />
                        <img src={Upload} alt="Upload icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameDetails;
