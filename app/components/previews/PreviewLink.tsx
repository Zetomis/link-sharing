import { CompanyType } from "@/app/libs/types";
import {
    faCat,
    faEnvelope,
    faF,
    faKiwiBird,
    faPlay,
    faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const PreviewLink = ({ type, url }: { type: CompanyType; url: string }) => {
    const getIcon = () => {
        switch (type) {
            case "GMAIL":
                return <FontAwesomeIcon icon={faEnvelope} />;
            case "FACEBOOK":
                return <FontAwesomeIcon icon={faF} />;
            case "GITHUB":
                return <FontAwesomeIcon icon={faCat} />;
            case "TWITTER":
                return <FontAwesomeIcon icon={faKiwiBird} />;
            case "YOUTUBE":
                return <FontAwesomeIcon icon={faPlay} />;
            default:
                <FontAwesomeIcon icon={faX} />;
        }
    };

    return (
        <a
            href={url}
            className={`${type} w-full rounded-md py-2 px-2 font-semibold text-white items-center flex gap-x-2`}
        >
            <div>{getIcon()}</div>
            <span>GMAIL</span>
        </a>
    );
};

export default PreviewLink;
