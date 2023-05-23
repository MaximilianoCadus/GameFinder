import { useEffect } from "react";

const GameDetailsInfo = ({
    list,
    setList,
    setLink,
    link,
    title,
    text,
    uList,
    webLink,
}) => {
    useEffect(() => {
        if (list) {
            setList(true);
        }
    }, [list]);

    useEffect(() => {
        if (link) {
            setLink(true);
        }
    }, [link]);

    if (list !== undefined) {
        return (
            <div className="text-modal">
                <span className="text-modal-title">{title}</span>
                <p className="text-modal-sp" title={uList}>
                    <u>{uList}</u>
                </p>
            </div>
        );
    } else if (link !== undefined) {
        if (webLink === "") {
            return (
                <div className="text-modal">
                    <span className="text-modal-title">{title}</span>
                    <p className="text-modal-sp" title={uList}>
                        No website available
                    </p>
                </div>
            );
        } else {
            return (
                <div className="text-modal">
                    <span className="text-modal-title">{title}</span>
                    <a href={webLink} target="_blank" rel="noopener noreferrer">
                        {webLink}
                    </a>
                </div>
            );
        }
    }

    return (
        <div className="text-modal">
            <span className="text-modal-title">{title}</span>
            <p className="text-modal-sp" title={uList}>
                {text}
            </p>
        </div>
    );
};

export default GameDetailsInfo;
