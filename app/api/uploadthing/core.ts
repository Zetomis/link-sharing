import { getServerSession } from "next-auth";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { authOptions } from "../auth/[...nextauth]/route";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const f = createUploadthing();

const auth = async (req: Request) => {
    const session = await getServerSession(authOptions);
    return { id: session?.user.id };
};

export const ourFileRouter = {
    imageUploader: f({ image: { maxFileSize: "4MB" } })
        .middleware(async ({ req }) => {
            const user = await auth(req);

            if (!user) throw new Error("Unauthorized");

            return { userId: user.id };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            console.log("Upload complete for userId:", metadata.userId);

            await prisma.user.update({
                where: {
                    id: metadata.userId,
                },
                data: {
                    image: file.url,
                },
            });

            console.log("file url", file.url);
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
