const ViewButton = ({ value }) => {
    return <img onClick={value.event} src={value.src} alt="Column view" />;
};

export default ViewButton;
