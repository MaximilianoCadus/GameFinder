import "../../../css/home/header/header.css";
import LogoutBtn from "./LogoutBtn";
import UserIcon from "./UserIcon";

const UserInteraction = () => {
  return (
    <div className="side">
      <LogoutBtn />
      <UserIcon />
    </div>
  );
};

export default UserInteraction;
