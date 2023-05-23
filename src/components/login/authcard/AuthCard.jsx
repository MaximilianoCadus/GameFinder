import LoginInfo from "./LoginInfo";
import SocialMedia from "./SocialMedia";
import "../../../css/login/auth-card/auth-card.css";

const AuthCard = () => {
    return (
        <div className="auth-page-card">
            <LoginInfo />
            <SocialMedia />
        </div>
    );
};

export default AuthCard;
