import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { SiNextdotjs, SiTailwindcss, SiReact } from "react-icons/si";
import { siTailwindcss, siReact } from "simple-icons";
import { GithubIcon, LinkIcon } from "lucide-react";

const FeaturedProject = () => {
  return (
    <Card className="shadow-md shadow-white overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <img
          src="/projects/oh.png"
          alt="OH Image"
          className="w-full lg:min-w-2xl h-64 md:h-80 lg:h-96 object-cover"
        />
        <div className="px-4 text-black justify-center flex flex-col gap-3 bg-white py-6 lg:py-2">
          <h2 className="crt-title text-black! text-2xl md:text-4xl font-bold">
            OH Fasilkom UI 2024
          </h2>
          <p className="text-sm md:text-md line-clamp-4 lg:line-clamp-none">
            Open House Fasilkom UI is the annual event held by the Faculty of
            Computer Science (Fasilkom UI) to promote the faculty. As Project
            Manager, I facilitated seamless communication between development
            and UI/UX teams, defined sprint goals, and set story points, while
            as Full-Stack Developer, I maintained and refactored code for
            performance, and developed the Open House admin website with Google
          </p>
          <div className="flex gap-4 items-center ">
            <SiNextdotjs className="size-8 md:size-12" />
            <SiTailwindcss
              style={{ color: `#${siTailwindcss.hex}` }}
              className="size-8 md:size-12"
            />
            <SiReact
              style={{ color: `#${siReact.hex}` }}
              className="size-8 md:size-12"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-4 lg:mt-12 justify-between gap-3 md:gap-5">
            <Button className="text-black text-sm md:text-xl h-10 md:h-12 flex font-bold justify-between flex-1 border-2 shadow-sm shadow-black border-black">
              <span>[</span>
              <span>Live Website</span>
              <span>]</span>
            </Button>
            <Button className="text-black text-sm md:text-xl h-10 md:h-12 font-bold flex justify-between flex-1 border-2 shadow-sm shadow-black border-black">
              <span>[</span>
              <span>View Code</span>
              <span>]</span>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

const ProjectCard = () => {
  return (
    <Card className="group hover:-translate-y-2 transition-all duration-300 overflow-hidden flex w-full shadow-md shadow-white bg-white flex-col">
      <div className="relative overflow-hidden ">
        <img
          src="/projects/oh.png"
          alt="OH Image"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div
          className="
    absolute inset-0
    flex items-center justify-center gap-3
    bg-black/60
    opacity-0
    transition-opacity duration-300
    group-hover:opacity-100
    p-4
  "
        >
          <Button
            className="
      px-3 py-2 text-xs md:text-sm
      translate-y-4
      group-hover:translate-y-0
      transition-transform duration-300
    "
          >
            <GithubIcon className="size-4 mr-1" />
            Code
          </Button>

          <Button
            className="
      px-3 py-2 text-xs md:text-sm
      translate-y-4
      group-hover:translate-y-0
      transition-transform duration-300
    "
          >
            <LinkIcon className="size-4 mr-1" />
            Live
          </Button>
        </div>
      </div>

      <div className="p-4 text-black flex-1 flex flex-col">
        <h2 className="crt-title mb-2 text-black! text-xl md:text-2xl font-bold">
          OH Fasilkom UI 2024
        </h2>
        <p className="text-sm line-clamp-3 mb-4 flex-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          aliquid doloribus quia quod excepturi quibusdam ullam, accusantium sit
          eligendi, at vitae itaque id nam quasi. Totam odio laboriosam veniam
          non!
        </p>
        <div className="flex gap-3 items-center ">
          <SiNextdotjs className="size-8" />
          <SiTailwindcss
            style={{ color: `#${siTailwindcss.hex}` }}
            className="size-8"
          />
          <SiReact style={{ color: `#${siReact.hex}` }} className="size-8" />
        </div>
      </div>
    </Card>
  );
};

const Projects = () => {
  return (
    <section className="text-white relative min-h-screen mb-20">
      <h1 className="crt-title text-4xl md:text-7xl font-bold mb-10">
        Featured Projects
      </h1>
      <div className="flex flex-col gap-10">
        <FeaturedProject />
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
