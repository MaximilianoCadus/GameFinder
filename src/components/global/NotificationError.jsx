import { useState } from "react";
import "../../css/global/notification-error/notification-error.css";

const NotificationError = () => {
  const [showModal, setShowModal] = useState(true);

  if (showModal) {
    return (
      <div className="overlay-notification">
        <div className="modalNotification-container">
          <h2 className="modalNotification-title">Error!</h2>
          <p className="modalNotification-text">
            An error occurred, please try again in a few minutes.
          </p>
          <button
            className="modalNotification-button"
            onClick={() => setShowModal(false)}
          >
            OK
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default NotificationError;
