export type ProjectData = {
    id: number;
    title: string;
    slug: string;
    imageUrl: string;
    description: string;
    status: string;
    year: number;
    link: string;
    tag: string;
}

export const project: ProjectData[] = [
    {
        id: 1,
        title: "Pretty MLS",
        slug: "pretty-mls",
        imageUrl: "/Pretty_MLS_Text.svg",
        description: `A tool for real estate agents using React and FastAPI, 
        allowing agents to print clean, professional property listings and eliminate cluttered exports.`,
        status: "In Progress",
        year: 2025,
        link: "",
        tag: "In-Progress"
    },
    {
        id: 2,
        title: "FlashBang",
        slug: "flashbang",
        imageUrl: "/Flashbang_Logomark_Light.svg",
        description: `A full-stack flashcard app with secure auth, deck/card CRUD, 
        and spaced-repetition logic to support long-term memory retention and user-focused learning.`,
        status: "Live",
        year: 2025,
        link: "https://app.bangflashmecardbang.win",
        tag: "In-Progress"
    },
    {
        id: 3,
        title: "murl - make ur link mini",
        slug: "murl",
        imageUrl: "/Murl_Text_Logo_Dark.svg",
        description: `A secure URL shortener with JWT auth, custom shortcodes, and analytics tracking, 
        offering a frictionless alternative to standard shorteners with optional account usage.`,        
        status: "Live",
        year: 2025,
        link: "https://rulm.xyz",
        tag: "On-Hold"

    },
    {
        id: 4,
        title: "StudioXR",
        slug: "studioxr",
        imageUrl: "/StudioXR_Text_Logo_Dark.svg",
        description: `A responsive e-commerce storefront using Next.js, Sanity CMS, and Stripe with 
        dynamic product collections and an intuitive CMS experience for non-technical users.`,                
        status: "Live",
        year: 2023,
        link: "https://studioxr.dev",
        tag: "Complete"

    },
]