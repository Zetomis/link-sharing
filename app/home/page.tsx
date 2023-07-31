"use client";

import ProtectRoute from "../components/auths/ProtectRoute";
import { useAppSelector } from "../hooks";
import LinkPage from "../components/homePages/LinkPage";
import ProfilePage from "../components/homePages/ProfilePage";
import Preview from "../components/previews/Preview";
import Link from "next/link";
import { useSession } from "next-auth/react";

const HomePage = () => {
    const currentPage = useAppSelector((state) => state.currentPage);
    const { data: session } = useSession();

    return (
        <ProtectRoute>
            <div className="grid gap-y-4">
                <div className="home_container">
                    <Preview />
                    <div className="white_container">
                        {currentPage.isLinksPage ? (
                            <LinkPage />
                        ) : (
                            <ProfilePage />
                        )}
                    </div>
                </div>
                <Link
                    href={`/user/${session?.user.id}`}
                    className="button_default button text-center w-full"
                >
                    Go to Preview
                </Link>
            </div>
        </ProtectRoute>
    );
};

export default HomePage;
