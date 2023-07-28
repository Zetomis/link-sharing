import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "username", type: "text" },
                password: { label: "password", type: "password" },
            },
            async authorize(crentials) {
                if (!crentials?.username || !crentials?.password) {
                    throw new Error("Missing credentials");
                }

                const user = await prisma.user.findUnique({
                    where: {
                        username: crentials?.username,
                    },
                });

                const isMatchedPassword = await compare(
                    crentials.password,
                    user?.password ?? ""
                );

                if (user && isMatchedPassword) {
                    return user;
                }

                throw new Error("Invalid credentials");
            },
        }),
    ],
    secret: process.env.SECRET,
    pages: {
        signIn: "/",
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
