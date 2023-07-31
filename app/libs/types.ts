export interface LinkType {
    id: String;
    userId: String;
    type: "GMAIL" | "YOUTUBE" | "FACEBOOK" | "GITHUB" | "TWITTER";
    url: string;
}

export type CompanyType =
    | "GMAIL"
    | "YOUTUBE"
    | "FACEBOOK"
    | "GITHUB"
    | "TWITTER";

export interface UserType {
    id: String;
    name: String;
    image: String;
    links: LinkType[];
}
