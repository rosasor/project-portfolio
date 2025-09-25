import ProjectCard from "@/components/ProjectCard"

export default function Projects() {
    return (
        <div>
            <main className="flex flex-col my-[4rem] px-[2rem] min-h-screen">
                <header className="">
                    <h1 className="text-4xl font-bold">Hello</h1>
                </header>


                {/* Project Card */}
                <section className="">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </section>
            </main>
        </div>
    )
}