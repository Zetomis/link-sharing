export interface LinkType {
    id: String;
    userId: String;
    type: "GMAIL" | "YOUTUBE" | "FACEBOOK" | "GITHUB" | "TWITTER";
    url: string;
}
