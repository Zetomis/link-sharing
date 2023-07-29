"use client";

import { ReactNode } from "react";
import Navbar from "../components/previews/Navbar";
import ProtectRoute from "../components/auths/ProtectRoute";
import { Provider } from "react-redux";
import { store } from "../store";

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <ProtectRoute>
            <Provider store={store}>
                <div className="flex flex-col gap-y-4">
                    <Navbar />
                    {children}
                </div>
            </Provider>
        </ProtectRoute>
    );
};

export default HomeLayout;
