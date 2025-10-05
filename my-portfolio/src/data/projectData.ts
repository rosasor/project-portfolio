export type ProjectData = {
    id: number;
    title: string;
    slug: string;
    imageUrl: string;
    description: string;
    status: string;
    year: number;
    link: string;
}

export const project: ProjectData[] = [
    {
        id: 1,
        title: "Pretty MLS",
        slug: "pretty-mls",
        imageUrl: "/Elena_Headshot.svg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        status: "In Progress",
        year: 2025,
        link: "",
    },
    {
        id: 2,
        title: "FlashBang",
        slug: "flashbang",
        imageUrl: "/Flashbang_Logomark_Light.svg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        status: "Live",
        year: 2025,
        link: "https://app.bangflashmecardbang.win",
    },
    {
        id: 3,
        title: "murl - make ur link mini",
        slug: "murl",
        imageUrl: "/Murl_Text_Logo_Dark.svg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        status: "Live",
        year: 2025,
        link: "https://rulm.xyz",

    },
    {
        id: 4,
        title: "StudioXR",
        slug: "studioxr",
        imageUrl: "/StudioXR_Text_Logo_Dark.svg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        status: "Live",
        year: 2023,
        link: "https://studioxr.dev",

    },
]