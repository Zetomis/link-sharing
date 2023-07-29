import "next-auth";

declare module "next-auth" {
    interface User {
        id: string;
        name: string;
        image: string | null;
    }

    interface Session {
        user: User;
    }
}
