import { hash } from "bcrypt";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (req: Request) => {
    const { username, password, confirmedPassword } = await req.json();

    if (!username || !password || !confirmedPassword) {
        throw new Error("Missing credentials");
    }

    const existedUser = await prisma.user.findUnique({
        where: {
            username: username,
        },
    });
    if (existedUser) {
        return new Response(JSON.stringify("Username already existed"), {
            status: 403,
        });
    }

    if (password !== confirmedPassword) {
        return new Response(JSON.stringify("Passwords do not match"), {
            status: 403,
        });
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await prisma.user.create({
        data: {
            username: username,
            password: hashedPassword,
        },
    });

    return new Response(JSON.stringify(newUser), {
        status: 200,
    });
};
