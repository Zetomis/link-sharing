import { ReactNode } from "react";
import Navbar from "../components/previews/Navbar";
import ProtectRoute from "../components/auths/ProtectRoute";

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <ProtectRoute>
            <Navbar />
            {children}
        </ProtectRoute>
    );
};

export default HomeLayout;
