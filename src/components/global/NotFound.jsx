import { useNavigate } from "react-router-dom";
import "../../css/global/not-found/not-found.css";
const NotFound = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/home");
    };

    return (
        <>
            <div className="container-not-found">
                <h1 className="not-found">404</h1>
                <h2 className="not-found-text">Oops, page not found</h2>
                <button className="go-back-btn" onClick={goHome}>
                    Go Home
                </button>
            </div>
        </>
    );
};

export default NotFound;
