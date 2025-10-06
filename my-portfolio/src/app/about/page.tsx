// import Link from "next/link";
// import { type SanityDocument } from "next-sanity";
// import { client } from "@/sanity/client";
import { Box } from "@radix-ui/themes";
import AboutHeader from "@/components/AboutHeader";
import AboutDetails from "@/components/AboutDetails";


// const PEOJECTS_QUERY = `*[
//   _type == "project"
//   && defined(slug.current)
// ]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

// const options = { next: { revalidate: 30 } };

export default async function About() {
    // const projects = await client.fetch<SanityDocument[]>(PEOJECTS_QUERY, {}, options);

    return (
        <Box className="">
            <AboutHeader />
            <AboutDetails />

            {/* <Section className="">
                <ul className="flex flex-col gap-y-4">
                    {projects.map((project) => (
                        <li className="hover:underline" key={project._id}>
                            <h2 className="text-xl font-semibold">{project.title}</h2>
                            <p>{new Date(project.publishedAt).toLocaleDateString()}</p>
                        </li>
                    ))}
                </ul>
            </Section> */}
        </Box>
    )
}