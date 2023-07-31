"use client";

import { CompanyType, LinkType } from "@/app/libs/types";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import _ from "lodash";

const LinkBar = ({
    link,
    links,
    setLinks,
}: {
    link: LinkType;
    links: LinkType[];
    setLinks: Dispatch<SetStateAction<LinkType[]>>;
}) => {
    const TYPE_ARRAY: CompanyType[] = [
        "GMAIL",
        "YOUTUBE",
        "FACEBOOK",
        "GITHUB",
        "TWITTER",
    ];
    const [isShowingDropdown, setIsShowingDropdown] = useState(false);

    const DropdownButton = ({ type }: { type: CompanyType }) => {
        return (
            <button
                className="border-none w-full text-left hover:bg-gray-100"
                onClick={() => {
                    const newLinks = [...links];
                    newLinks.map((curLink) => {
                        if (curLink.id === link.id) {
                            curLink.type = type;
                        }
                    });
                    setIsShowingDropdown(false);
                }}
            >
                {_.capitalize(type)}
            </button>
        );
    };

    const handleDelete = () => {
        const newLinks = [...links];
        newLinks.filter((curLink) => curLink.id !== link.id);
        setLinks((before) => {
            return before.filter((curLink) => curLink.id !== link.id);
        });
    };

    const handleUpdateURL = (event: ChangeEvent<HTMLInputElement>) => {
        const newLinks = [...links];
        newLinks.map((curLink) => {
            if (curLink.id === link.id) {
                link.url = event.target.value;
            }
        });
        setLinks(newLinks);
    };

    return (
        <div className="border-2 border-gray-800 rounded-md px-4 py-2 relative">
            <div className="linkbar">
                <label>Type:</label>
                <button
                    className="border-none w-full text-left"
                    onClick={() => setIsShowingDropdown(!isShowingDropdown)}
                >
                    {_.capitalize(link.type)}{" "}
                    <FontAwesomeIcon icon={faChevronDown} />
                </button>
                {isShowingDropdown && (
                    <div className="py-2 px-4 flex flex-col gap-y-2">
                        {TYPE_ARRAY.map((type) => (
                            <DropdownButton type={type} />
                        ))}
                    </div>
                )}
                <label>URL:</label>
                <input
                    type="text"
                    placeholder="Enter URL..."
                    className="px-4 py-2 border-2 border-gray-800 rounded-sm w-full"
                    defaultValue={link.url}
                    onChange={(event) => handleUpdateURL(event)}
                />
            </div>
            <button
                className="absolute top-0 right-0 border-none"
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    );
};

export default LinkBar;
