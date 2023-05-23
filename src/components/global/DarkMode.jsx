import React, { useEffect } from "react";
import "../../css/global/darkmode/darkmode.css";
import "../../css/login/login.css";
import useLocalStorage from "use-local-storage";

const DarkMode = ({ className, classTitle }) => {
    const [theme, setTheme] = useLocalStorage("theme", "light");

    const switchTheme = () => {
        if (theme === "light") {
            document.body.setAttribute("data-theme", "dark");
            setTheme("dark");
        } else {
            document.body.removeAttribute("data-theme");
            setTheme("light");
        }
    };

    useEffect(() => {
        if (theme === "dark") {
            document.body.setAttribute("data-theme", "dark");
        }
    }, []);

    return (
        <div className={className} data-theme={theme}>
            <h3 className={classTitle}>Dark mode</h3>
            <button
                onClick={switchTheme}
                className="dark-mode-button-container"
            >
                <div
                    className={
                        theme === "light"
                            ? "dark-mode-button-off"
                            : "dark-mode-button-on"
                    }
                ></div>
                <div
                    className={
                        theme === "light" ? "dark-mode-off" : "dark-mode-on"
                    }
                >
                    {theme === "light" ? "OFF" : "ON"}
                </div>
            </button>
        </div>
    );
};

export default DarkMode;
