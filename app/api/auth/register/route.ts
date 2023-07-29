import { hash } from "bcrypt";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (req: Request) => {
    const { name, password, confirmedPassword } = await req.json();

    if (!name || !password || !confirmedPassword) {
        throw new Error("Missing credentials");
    }

    const existedUser = await prisma.user.findUnique({
        where: {
            name: name,
        },
    });
    if (existedUser) {
        return new Response(JSON.stringify("Name already existed"), {
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
            name: name,
            password: hashedPassword,
        },
    });

    return new Response(JSON.stringify(newUser), {
        status: 200,
    });
};
