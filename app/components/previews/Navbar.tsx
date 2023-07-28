import Logo from "../generals/Logo";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
    changePageToLink,
    changePageToProfile,
} from "@/app/features/currentPageSlice";
import Link from "next/link";
import { signOut } from "next-auth/react";

const Navbar = () => {
    const currentPage = useAppSelector((state) => state.currentPage);
    const dispatch = useAppDispatch();

    return (
        <div className="navbar_container">
            <Logo />
            <div className="flex justify-center gap-x-4">
                <button
                    className={
                        currentPage.isLinksPage
                            ? "button_default"
                            : "button_link"
                    }
                    onClick={() => {
                        dispatch(changePageToLink());
                    }}
                >
                    Links
                </button>
                <button
                    className={
                        currentPage.isLinksPage
                            ? "button_link"
                            : "button_default"
                    }
                    onClick={() => {
                        dispatch(changePageToProfile());
                    }}
                >
                    Profile
                </button>
            </div>
            <button
                className="button_default w-fit justify-self-end"
                onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
            >
                Sign Out
            </button>
        </div>
    );
};

export default Navbar;
