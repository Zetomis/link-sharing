"use client";

import ProtectRoute from "../components/auths/ProtectRoute";
import { useAppSelector } from "../hooks";
import LinkPage from "../components/homePages/LinkPage";
import ProfilePage from "../components/homePages/ProfilePage";
import Preview from "../components/previews/Preview";

const HomePage = () => {
    const currentPage = useAppSelector((state) => state.currentPage);

    return (
        <ProtectRoute>
            <div className="home_container">
                <Preview />
                <div className="white_container">
                    {currentPage.isLinksPage ? <LinkPage /> : <ProfilePage />}
                </div>
            </div>
        </ProtectRoute>
    );
};

export default HomePage;
