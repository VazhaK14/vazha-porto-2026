import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { SiNextdotjs, SiTailwindcss, SiReact } from "react-icons/si";
import { siTailwindcss, siReact } from "simple-icons";

const FeaturedProject = () => {
  return (
    <Card className="shadow-md shadow-white">
      <div className="flex flex-col lg:flex-row  ">
        <img
          src="/projects/oh.png"
          alt="OH Image"
          className="md:min-w-2xl  h-96 object-cover"
        />
        <div className="px-4 text-black justify-center flex flex-col gap-3 bg-white py-2">
          <h2 className="crt-title text-black! text-4xl  font-bold">
            OH Fasilkom UI 2024
          </h2>
          <p className="text-md">
            Open House Fasilkom UI is the annual event held by the Faculty of
            Computer Science (Fasilkom UI) to promote the faculty. As Project
            Manager, I facilitated seamless communication between development
            and UI/UX teams, defined sprint goals, and set story points, while
            as Full-Stack Developer, I maintained and refactored code for
            performance, and developed the Open House admin website with Google
          </p>
          <div className="flex gap-5 items-center ">
            <SiNextdotjs className={`size-12 `} />
            <SiTailwindcss
              style={{ color: `#${siTailwindcss.hex}` }}
              className="size-12 "
            />
            <SiReact
              style={{ color: `#${siReact.hex}` }}
              className="size-12 "
            />
          </div>
          <div className="flex mt-12 justify-between gap-5">
            <Button className="text-black text-xl h-12 flex font-bold justify-between flex-1 border-2 shadow-sm shadow-black border-black">
              <span>[</span>
              <span>Live Website</span>
              <span>]</span>
            </Button>
            <Button className="text-black text-xl h-12 font-bold flex justify-between flex-1 border-2 shadow-sm shadow-black border-black">
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
    <Card className="group hover:-translate-y-3 transition-all duration-300 overflow-hidden flex w-full shadow-md shadow-white bg-white flex-col">
      <div className="relative overflow-hidden">
        <img
          src="/projects/oh.png"
          alt="OH Image"
          className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div
          className="
    absolute inset-0
    flex items-center justify-center gap-4
    bg-linear-to-t from-black/50 to-transparent
    opacity-0
    transition-opacity duration-300
    group-hover:opacity-100
  "
        >
          <Button
            className="
      px-4 py-2
      absolute left-4 bottom-4
      translate-y-10
      group-hover:translate-y-0
      transition-transform duration-300
  
    "
          >
            View Code
          </Button>

          <Button
            className="
      px-4 py-2
      absolute left-35 bottom-4
      translate-y-10
      group-hover:translate-y-0
      transition-transform duration-300
  
    "
          >
            Live Site
          </Button>
        </div>
      </div>

      <div className="px-4 text-black mt-4">
        <h2 className="crt-title mb-5 text-black! text-3xl font-bold">
          OH Fasilkom UI 2024
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          aliquid doloribus quia quod excepturi quibusdam ullam, accusantium sit
          eligendi, at vitae itaque id nam quasi. Totam odio laboriosam veniam
          non!
        </p>
        <div className="flex my-4 gap-5 items-center ">
          <SiNextdotjs className={`size-12 `} />
          <SiTailwindcss
            style={{ color: `#${siTailwindcss.hex}` }}
            className="size-12 "
          />
          <SiReact style={{ color: `#${siReact.hex}` }} className="size-12 " />
        </div>
      </div>
    </Card>
  );
};

const Projects = () => {
  return (
    <section className="text-white relative min-h-screen mb-10">
      <h1 className="crt-title text-4xl max-md:mb-10 md:text-7xl scanlines font-bold ">
        Featured Projects
      </h1>
      <div className="w-fit flex flex-col mt-10">
        <FeaturedProject />
        <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit">
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
