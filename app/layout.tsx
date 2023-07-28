import { Metadata } from "next";
import { ReactNode } from "react";

import "./globals.css";
import Provider from "./components/providers/Provider";

export const metadata: Metadata = {
    title: "Login",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <body className="body">
                <Provider>
                    <div className="page_container">{children}</div>
                </Provider>
            </body>
        </html>
    );
};

export default RootLayout;
