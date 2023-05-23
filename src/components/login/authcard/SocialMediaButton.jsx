const SocialMediaButton = (props) => {
    const name = props.value.name;
    const svg = props.value.svg;

    return (
        <a href="#" className="social-button">
            <img src={svg} alt={name} />
            <div className="social-title">Log in with {name}</div>
        </a>
    );
};

export default SocialMediaButton;
