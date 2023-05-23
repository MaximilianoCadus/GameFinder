import { useNavigate } from "react-router-dom";
import "../../../css/home/header/header.css";

const LogoutNotification = ({ askLogout, setAskLogout }) => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("jwt");
    navigate("/");
  };

  if (askLogout) {
    return (
      <div className="overlay-logout">
        <div className="logout-container">
          <h2 className="logout-title">Log out</h2>
          <p className="logout-text">Are you sure you want to log out?</p>
          <button className="logout-button" onClick={() => logOut()}>
            Yes
          </button>
          <p className="logout-cancel" onClick={() => setAskLogout(false)}>
            Cancel
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default LogoutNotification;
