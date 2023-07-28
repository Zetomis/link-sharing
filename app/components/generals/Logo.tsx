import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href={"/"} className="flex items-center gap-x-1">
            <FontAwesomeIcon icon={faHome} className="w-6 h-6" />
            <h1 className="font-extrabold text-2xl">devlinks</h1>
        </Link>
    );
};

export default Logo;
