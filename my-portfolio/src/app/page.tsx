import NavBar from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Progress } from "radix-ui";


export default function Home() {
  return (
    <div className="flex flex-col justify-items-center min-h-screen" >
      <main className="flex flex-col gap-[32px] justify-center items-center m-auto my-[4rem] px-[2rem]">
        
        <header className="">
          <h1 className="text-4xl font-bold">Hello</h1>
        </header>


        {/* Project Card */}
        <section >
          <ProjectCard />
        </section>

      </main>
    </div>
  );
}
