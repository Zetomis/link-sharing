"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const ProtectRoute = ({ children }: { children: ReactNode }) => {
    const { data: session } = useSession();
    const router = useRouter();

    if (!session) {
        router.push("/");
    }

    return <div className="w-full h-full">{children}</div>;
};

export default ProtectRoute;
