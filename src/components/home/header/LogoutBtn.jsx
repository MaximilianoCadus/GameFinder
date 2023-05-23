import "../../../css/home/header/header.css";
import { useState } from "react";
import LogoutNotification from "./LogoutNotification";

const LogoutBtn = () => {
  const [askLogout, setAskLogout] = useState(false);

  const userLogout = () => {
    setAskLogout(true);
  };

  return (
    <>
      <button className="log-out" onClick={userLogout}>
        Log out
      </button>
      <LogoutNotification askLogout={askLogout} setAskLogout={setAskLogout} />
    </>
  );
};

export default LogoutBtn;
