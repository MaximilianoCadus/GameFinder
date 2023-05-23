import { useState, useEffect } from "react";
import "../../../css/home/modal/modal.css";
import { Portal } from "react-portal";
import Cross from "../../../assets/icon/cross.svg";
import ModalArrowClose from "../../../assets/icon/modal-arrow.svg";
import GameDetails from "./GameDetails";
import GameMedia from "./GameMedia";

const Modal = ({ setIsOpen, game, modalArrow, setModalArrow }) => {
  const { background_image: backgroundImage, name } = game;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Portal>
      <div className="container-modal">
        <img
          src={backgroundImage}
          alt={"Background " + name || "No name available"}
          className={
            screenWidth > 420 ? "modal-background" : "modal-background-none"
          }
        />
        <div className="modal-container">
          <img
            src={backgroundImage}
            alt={"Background " + name || "No name available"}
            className={
              screenWidth > 420 ? "modal-background-none" : "modal-background"
            }
          />
          <div
            className={
              screenWidth > 420
                ? "modal-background-none"
                : "bg-container-mobile"
            }
          ></div>
          <div
            className={`cross-icon ${modalArrow ? "modal-arrow" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
              setModalArrow(false);
            }}
          >
            <img
              src={screenWidth > 420 ? Cross : ModalArrowClose}
              alt="Cross icon"
            />
          </div>
          <GameDetails game={game} />
          <GameMedia game={game} />
        </div>
        <div
          className="modal-overlay"
          onClick={() => {
            setIsOpen(false);
            setModalArrow(false);
          }}
        ></div>
      </div>
    </Portal>
  );
};

export default Modal;
