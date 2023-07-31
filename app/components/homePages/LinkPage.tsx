"use client";

import { LinkType } from "@/app/libs/types";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import LinkBar from "../linkComp/LinkBar";

const LinkPage = () => {
    const [links, setLinks] = useState<LinkType[]>([]);
    const [addLinkLoading, setAddLinkLoading] = useState(false);
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

    const handleNewLinks = async () => {
        setAddLinkLoading(true);
        await fetch("/api/link", {
            method: "POST",
        });
        getCurrentUserLink();
        setAddLinkLoading(false);
    };

    const handleSave = () => {
        links.forEach(async (link) => {
            await fetch("/api/link", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ link }),
            });
        });
    };

    return (
        <div>
            <h1 className="font-bold text-2xl mb-2 block">
                Customize your links.
            </h1>
            <p className="font-base text-base mb-6 block">
                Add/edit/remove links below and then share all your profiles
                with the world
            </p>
            <button
                className={`${
                    links.length <= 4 || !addLinkLoading
                        ? "button_default"
                        : "button_link"
                } w-full`}
                onClick={() => {
                    if (links.length <= 4 && !addLinkLoading) {
                        handleNewLinks();
                    }
                }}
            >
                + Add new link {addLinkLoading && "(loading...)"}
            </button>
            <div className="mt-4 flex flex-col gap-y-4">
                {links &&
                    links.map((link) => (
                        <LinkBar
                            link={link}
                            links={links}
                            setLinks={setLinks}
                        />
                    ))}
            </div>
            <button className="button_default w-full mt-4" onClick={handleSave}>
                Save
            </button>
        </div>
    );
};

export default LinkPage;
