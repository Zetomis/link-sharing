"use client";

import ProtectRoute from "../components/auths/ProtectRoute";
import { useAppSelector } from "../hooks";
import LinkPage from "../components/homePages/LinkPage";
import ProfilePage from "../components/homePages/ProfilePage";

const HomePage = () => {
    const currentPage = useAppSelector((state) => state.currentPage);

    return (
        <ProtectRoute>
            {currentPage.isLinksPage ? <LinkPage /> : <ProfilePage />}
        </ProtectRoute>
    );
};

export default HomePage;
