import UserIcon from "./UserIcon";

const User = () => {
    return (
        <div className="user-info-container">
            <UserIcon />
            <div>
                <h3>Jane Doe</h3>
                <p>@janedoe</p>
            </div>
        </div>
    );
};

export default User;
