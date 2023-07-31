// This is for current user

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const GET = async (req: Request) => {
    const session = await getServerSession(authOptions);

    if (!session) {
        return new Response(JSON.stringify("Sign in first"), { status: 403 });
    }

    const userLink = await prisma.user.findUnique({
        where: {
            name: session.user.name,
        },
        select: {
            links: true,
        },
    });

    return new Response(JSON.stringify(userLink), { status: 200 });
};

export const POST = async (req: Request) => {
    const session = await getServerSession(authOptions);

    if (!session) {
        return new Response(JSON.stringify("Sign in first"), { status: 403 });
    }

    await prisma.link.create({
        data: {
            userId: session.user.id,
            type: "GMAIL",
            url: "",
        },
    });

    return new Response(null, { status: 200 });
};

export const PATCH = async (req: Request) => {
    const { link } = await req.json();

    if (link) {
        await prisma.link.update({
            where: {
                id: link.id,
            },
            data: {
                type: link.type,
                url: link.url,
            },
        });
    }

    return new Response(null, { status: 200 });
};

export const DELETE = async (req: Request) => {};
