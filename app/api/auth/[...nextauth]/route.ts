import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth/next";
const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                name: { label: "Name", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credetials) {
                if (!credetials?.name || !credetials?.password) {
                    throw new Error("Missing credentials");
                }

                const user = await prisma.user.findUnique({
                    where: {
                        name: credetials.name,
                    },
                });

                if (!user) {
                    throw new Error("Invalid credentials");
                }

                const isMatch = await compare(
                    credetials.password,
                    user.password
                );

                if (isMatch) {
                    return user;
                }

                throw new Error("Invalid credentials");
            },
        }),
    ],
    callbacks: {
        async session({ session }) {
            const user = await prisma.user.findUnique({
                where: {
                    name: session.user.name,
                },
            });

            if (user) {
                session.user.id = user.id;
                session.user.image = user.image;
            }

            return session;
        },
    },
    secret: process.env.SECRET,
    pages: {
        signIn: "/",
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
