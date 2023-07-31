"use client";

import PreviewLink from "@/app/components/previews/PreviewLink";
import { UserType } from "@/app/libs/types";
import Image from "next/image";
import { useEffect, useState } from "react";

const UserPage = ({ params }: { params: { userId: string } }) => {
    const [user, setUser] = useState<UserType | null>(null);

    useEffect(() => {
        const getUser = async () => {
            const response = await fetch(`/api/user/${params.userId}`);
            const data = await response.json();
            if (response.ok) {
                setUser(data.user);
            }
        };

        if (params.userId) {
            getUser();
        }
    }, []);

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="fixed top-0 left-0 right-0 h-3/4 bg-gray-800"></div>
            {user && (
                <div className="bg-white p-4 rounded-md z-10 w-96 grid gap-y-4">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden flex justify-center items-center border-4 border-gray-200 justify-self-center">
                        {user.image ? (
                            <Image src={user.image ?? ""} fill></Image>
                        ) : (
                            <>n/a</>
                        )}
                    </div>
                    <h1 className="font-bold text-center text-2xl">
                        {user.name}
                    </h1>
                    {user.links &&
                        user.links.map((link) => (
                            <PreviewLink
                                type={link.type}
                                url={link.url}
                            ></PreviewLink>
                        ))}
                </div>
            )}
        </div>
    );
};

export default UserPage;
