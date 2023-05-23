import { useState, createContext } from "react";
import "../css/global/snackbar/snackbar.css";

const Snackbar = ({ message, showSnackbar }) => {
    if (message === "") return;

    return (
        <div
            className="snackbar"
            id={`${showSnackbar === "active" ? "show" : "hide"}`}
        >
            {message}
        </div>
    );
};

export const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
    const [message, setMessage] = useState("");
    const [showSnackbar, setShowSnackbar] = useState("active");

    const setSnackbar = (message, showSnackbar) => {
        setMessage(message);
        setShowSnackbar(showSnackbar);

        setTimeout(() => {
            setMessage("");
            setShowSnackbar("inactive");
        }, 5000);
    };

    return (
        <SnackbarContext.Provider value={{ setSnackbar }}>
            <Snackbar message={message} showSnackbar={showSnackbar} />
            {children}
        </SnackbarContext.Provider>
    );
};
