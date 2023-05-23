import SocialMediaButton from "./SocialMediaButton";
import Facebook from "../../../assets/icon/facebook.svg";
import Twitter from "../../../assets/icon/twitter.svg";
import Google from "../../../assets/icon/google.svg";

const SocialMedia = () => {
    return (
        <>
            <div className="line">or</div>
            <div className="social-media-list">
                <SocialMediaButton
                    value={{
                        name: "Facebook",
                        svg: Facebook,
                    }}
                />
                <SocialMediaButton
                    value={{
                        name: "Twitter",
                        svg: Twitter,
                    }}
                />
                <SocialMediaButton
                    value={{
                        name: "Google",
                        svg: Google,
                    }}
                />
            </div>
        </>
    );
};

export default SocialMedia;
