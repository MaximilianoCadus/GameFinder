import LogoSvg from "../../../assets/icon/logo.svg";
import "../../../css/home/header/header.css";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(0);
  };

  return (
    <div onClick={goHome} className="logo">
      <img src={LogoSvg} alt="Game finder logo" />
    </div>
  );
};

export default Logo;
