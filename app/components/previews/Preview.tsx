"use client";

import { LinkType } from "@/app/libs/types";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import PreviewLink from "./PreviewLink";

const Preview = () => {
    const [links, setLinks] = useState<LinkType[]>([]);
    const { data: session } = useSession();

    const getCurrentUserLink = async () => {
        const response = await fetch("/api/link");
        const data = await response.json();
        setLinks(data.links);
    };

    useEffect(() => {
        if (session) {
            getCurrentUserLink();
        }
    }, []);

    return (
        <div className="white_container">
            <div className="phone_container border-4 border-double border-gray-800 rounded-md flex flex-col items-center">
                <div className="w-32 h-32 border-4 overflow-hidden rounded-full flex justify-center items-center relative">
                    {session?.user.image ? (
                        <Image
                            src={session?.user?.image ?? ""}
                            alt={""}
                            fill
                            objectFit="contain"
                        />
                    ) : (
                        <h1 className="font-semibold text-xl">n/a</h1>
                    )}
                </div>
                <h1 className="font-semibold text-xl mt-2 mb-4 block">
                    {session?.user.name}
                </h1>
                <div className="grid gap-y-2 w-full">
                    {links &&
                        links.map((link) => (
                            <PreviewLink type={link.type} url={link.url} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Preview;
