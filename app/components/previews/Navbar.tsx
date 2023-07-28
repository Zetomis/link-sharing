import Link from "next/link";
import Logo from "../generals/Logo";

const Navbar = () => {
    return (
        <div className="navbar_container">
            <Logo />
            <div className="flex justify-center gap-x-4">
                <Link className="button_default" href={"/links"}>
                    Links
                </Link>
                <Link className="button_default" href={"/profile"}>
                    Profile
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
