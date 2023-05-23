import "../../../css/login/header/header.css";
import Logo from "../../../assets/icon/logo.svg";

const Header = () => {
    return (
        <header className="div-header">
            <img src={Logo} className="logo-header" alt="Game finder logo" />
        </header>
    );
};
export default Header;
