"use client";

import { signOut } from "next-auth/react";
import ProtectRoute from "../components/auths/ProtectRoute";

const HomePage = () => {
    return (
        <ProtectRoute>
            <h1>
                <button onClick={() => signOut()}>Sign Out</button>
            </h1>
        </ProtectRoute>
    );
};

export default HomePage;
