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
        description: `A tool for real estate agents to print clean, professional property listings and eliminate cluttered exports.
        Built with React, TypeScript, Vite, and FastAPI`,
        status: "In Progress",
        year: 2025,
        link: "",
        tag: "In Progress"
    },
    {
        id: 2,
        title: "FlashBang",
        slug: "flashbang",
        imageUrl: "/Flashbang_Logomark_Light.svg",
        description: `A full-stack flashcard app with spaced-repetition to support long-term memory retention and user-focused learning.
        Features include secure auth and deck/card CRUD. Hosted with Vercel, Railway, and Supabase.`,
        status: "Live",
        year: 2025,
        link: "https://app.bangflashmecardbang.win",
        tag: "In Progress"
    },
    {
        id: 3,
        title: "murl - make ur link mini",
        slug: "murl",
        imageUrl: "/Murl_Text_Logo_Dark.svg",
        description: `A secure URL shortener with custom shortcodes and analytics tracking, 
        offering a frictionless alternative to standard shorteners with optional account usage.
        Built with React, TypeScript, Vite, and FastAPI.`,        
        status: "Live",
        year: 2025,
        link: "https://rulm.xyz",
        tag: "On Hold"

    },
    {
        id: 4,
        title: "StudioXR",
        slug: "studioxr",
        imageUrl: "/StudioXR_Text_Logo_Dark.svg",
        description: `A responsive e-commerce storefront with dynamic product collections 
        and an intuitive CMS experience for non-technical users. Built with Next.js, Sanity CMS, and Stripe `,                
        status: "Live",
        year: 2023,
        link: "https://studioxr.dev",
        tag: "Complete"

    },
]