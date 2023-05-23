import { useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Button from "./Button";
import Eye from "./Eye";

const Form = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [validMail, setValidMail] = useState(true);
    const [validPass, setValidPass] = useState(true);

    const {
        authUser,
        passwordType,
        inputClass,
        setInputClass,
        setToggleClass,
    } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        authUser({
            mail,
            password,
        });
    };

    const checkEmail = (string) => {
        setValidMail(/\S+@\S+\.\S+/.test(string));
        return validMail;
    };

    const isPasswordValid = (string) => {
        setValidPass(string.length >= 4 && string.length <= 12);
        return validPass;
    };

    return (
        <div className="form-container">
            <form className="auth-page-form" onSubmit={handleSubmit}>
                <div className="input-box-username">
                    <input
                        className={
                            validMail
                                ? inputClass + " input-email"
                                : inputClass + " input-email-error"
                        }
                        type="email"
                        name="email"
                        placeholder="Email"
                        id="username"
                        autoComplete="off"
                        required
                        autoFocus
                        onChange={(e) => {
                            setMail(e.target.value);
                            checkEmail(mail);
                            setInputClass("input");
                            setToggleClass("toggle-password");
                        }}
                    />
                </div>
                <small className={validMail ? "" : "invalid"}>
                    {validMail ? "" : "Invalid email"}
                </small>
                <div className="input-box-password">
                    <input
                        className={inputClass + " input-password"}
                        type={passwordType}
                        name="password"
                        placeholder="Password"
                        maxLength="12"
                        id="password"
                        autoComplete="off"
                        required
                        onChange={(e) => {
                            setPassword(e.target.value);
                            isPasswordValid(password);
                            setInputClass("input");
                            setToggleClass("toggle-password");
                        }}
                    />
                    <Eye></Eye>
                </div>
                <small className={validPass ? "" : "invalid"}>
                    {validPass
                        ? ""
                        : "Password must be longer than 4 characters"}
                </small>
                <div className="input-box-side">
                    <div className="input-box-remember-me">
                        <input type="checkbox" />
                        <label className="label-remember-me">Remember me</label>
                    </div>
                    <a href="#" className="forgot-password">
                        Forgot password?
                    </a>
                </div>
                <Button />
            </form>
            <div className="registration">
                <span className="registration-none"> Not registred yet?</span>
                <a href="#" className="registration-now">
                    Register now
                </a>
            </div>
        </div>
    );
};

export default Form;
