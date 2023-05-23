import Carousel from "../components/login/carousel/Carousel";
import Header from "../components/login/header/Header";
import DarkMode from "../components/global/DarkMode";
import AuthCard from "../components/login/authcard/AuthCard";
import "../css/login/login.css";
import "../css/login/media-queries.css";
import { AuthContextProvider } from "../contexts/AuthContext";
import { SnackbarProvider } from "../contexts/SnackbarContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
    const accessToken = JSON.parse(localStorage.getItem("jwt"));
    const navigate = useNavigate();

    const redirectHome = () => {
        if (accessToken) {
            navigate("/home");
        }
    };

    useEffect(() => {
        redirectHome();
    }, []);

    return (
        <>
            <Header />
            <DarkMode className="dark-mode-container" classTitle="dark-title" />
            <SnackbarProvider>
                <AuthContextProvider>
                    <AuthCard />
                </AuthContextProvider>
            </SnackbarProvider>
            <Carousel />
        </>
    );
};

export default Login;
