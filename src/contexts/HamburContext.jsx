import { useState, createContext } from "react";

export const HamburContext = createContext();

export const HamburContextProvider = (props) => {
    const [clicked, setClicked] = useState(false);
    const [isSearch, setSearch] = useState(false);
    const [modalArrow, setModalArrow] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    const handleOpen = () => {
        setSearch(!isSearch);
    };

    return (
        <HamburContext.Provider
            value={{
                clicked,
                handleClick,
                isSearch,
                handleOpen,
                modalArrow,
                setModalArrow,
            }}
        >
            {props.children}
        </HamburContext.Provider>
    );
};
