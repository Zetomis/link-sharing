import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Logo = () => {
    return (
        <div className="flex items-center gap-x-1 cursor-pointer">
            <FontAwesomeIcon icon={faHome} className="w-6 h-6" />
            <h1 className="font-extrabold text-2xl">devlinks</h1>
        </div>
    );
};

export default Logo;
