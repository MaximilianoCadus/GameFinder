import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import EyeSvg from "../assets/icon/eye.svg";
import NoEyeSvg from "../assets/icon/no-eye.svg";
import { SnackbarContext } from "./SnackbarContext";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const navigate = useNavigate();
    const { setSnackbar } = useContext(SnackbarContext);

    const authUser = (user) => {
        fetch("http://localhost:3000/login", {
            method: "POST",
            body: JSON.stringify({
                email: user.mail,
                password: user.password,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.hasOwnProperty("accessToken")) {
                    localStorage.setItem(
                        "jwt",
                        JSON.stringify(result.accessToken)
                    );
                    localStorage.setItem("id", result.user.id);
                    navigate("/home");
                } else {
                    setInputClass("input-wrong");
                    setToggleClass("toggle-password-wrong");
                    setSnackbar("Incorrect email or password.", "active");
                }
            })
            .catch(() => {
                setSnackbar("Oops! Something went wrong.", "active");
            });
    };

    const [state, setState] = useState();
    const [passwordType, setPasswordType] = useState("password");
    const [inputClass, setInputClass] = useState("input");
    const [toggleClass, setToggleClass] = useState("toggle-password");
    const [eyeSrc, setEyeSrc] = useState(EyeSvg);

    const passToggle = () => {
        if (state) {
            setPasswordType("password");
            setState(false);
            setEyeSrc(EyeSvg);
        } else {
            setPasswordType("text");
            setState(true);
            setEyeSrc(NoEyeSvg);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                authUser,
                passToggle,
                setInputClass,
                setToggleClass,
                passwordType,
                inputClass,
                toggleClass,
                eyeSrc,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};
