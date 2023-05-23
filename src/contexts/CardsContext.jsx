import { createContext, useState } from "react";

export const CardsContext = createContext();

export const CardsContextProvider = (props) => {
    const [cardClass, setCardClass] = useState(true);

    const changeView1 = () => {
        setCardClass(true);
    };

    const changeView2 = () => {
        setCardClass(false);
    };

    return (
        <CardsContext.Provider value={{ changeView1, changeView2, cardClass }}>
            {props.children}
        </CardsContext.Provider>
    );
};
