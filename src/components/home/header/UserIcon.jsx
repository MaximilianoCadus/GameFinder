import "../../../css/home/header/header.css";
import UserImg from "../../../assets/images/user-icon.png";

const UserIcon = () => {
  return (
    <>
      <span className="avatar-user">
        <img src={UserImg} alt="User avatar" />
      </span>
    </>
  );
};

export default UserIcon;
