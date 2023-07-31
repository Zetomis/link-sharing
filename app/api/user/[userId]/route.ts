import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const GET = async (
    req: Request,
    { params }: { params: { userId: string } }
) => {
    const user = await prisma.user.findUnique({
        where: {
            id: params.userId,
        },
        select: {
            id: true,
            name: true,
            image: true,
            links: true,
        },
    });

    if (!user) {
        return new Response("User not existed", { status: 404 });
    }

    return new Response(JSON.stringify({ user }), { status: 200 });
};
