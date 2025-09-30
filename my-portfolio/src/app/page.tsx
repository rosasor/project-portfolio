import ProjectCard from "@/components/ProjectCard";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col justify-items-center min-h-screen" >
      <main className="flex flex-col gap-[32px] justify-center items-center m-auto my-[4rem] px-[2rem]">
        <div>

        </div>
        <header className="">
          <Header />
        </header>


        {/* Project Card */}
        <section >
          <ProjectCard />
        </section>

      </main>
    </div>
  );
}
