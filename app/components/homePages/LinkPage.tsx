"use client";

import { LinkType } from "@/app/libs/types";
import { useState } from "react";

const LinkPage = () => {
    const [links, setLinks] = useState<LinkType[]>([]);

    const handleNewLinks = async () => {};

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
                    links.length === 5 ? "button_link" : "button_default"
                } w-full`}
                onClick={() => {
                    if (links.length < 5) {
                        handleNewLinks();
                    }
                }}
            >
                + Add new link
            </button>
        </div>
    );
};

export default LinkPage;
