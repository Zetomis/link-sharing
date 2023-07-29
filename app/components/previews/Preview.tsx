"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

const Preview = () => {
    const { data: session } = useSession();

    console.log(session);

    return (
        <div className="white_container">
            <div className="phone_container border-4 border-double border-gray-800 rounded-md flex flex-col items-center">
                <div className="w-32 h-32 border-4 overflow-hidden rounded-full flex justify-center items-center">
                    {session?.user.image ? (
                        <Image src={session?.user?.image ?? ""} alt={""} />
                    ) : (
                        <h1 className="font-semibold text-xl">n/a</h1>
                    )}
                </div>
                <h1 className="font-semibold text-xl mt-2 mb-4 block">
                    {session?.user.name}
                </h1>
            </div>
        </div>
    );
};

export default Preview;
