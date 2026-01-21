import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { SiNextdotjs, SiTailwindcss, SiReact } from "react-icons/si";
import { siTailwindcss, siReact } from "simple-icons";
import { GithubIcon, LinkIcon } from "lucide-react";
import { projectsData } from "../payload";
import type { ReactNode } from "react";
import { Link } from "react-router";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  techstack: TechStackItem[];
  webLink: string;
  repoLink: string;
}

interface TechStackItem {
  node: ReactNode;
  title: string;
  brandColor?: string;
}

const FeaturedProject = ({
  img,
  title,
  desc,
  techstack,
  webLink,
  repoLink,
}: ProjectCardProps) => {
  return (
    <Card className="shadow-md shadow-white overflow-hidden group border-none">
      <div className="flex flex-col lg:flex-row relative">
        <div className="relative w-full lg:min-w-2xl h-64 md:h-80 lg:h-96 overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 glitch-hover-effect"
          />
          <div className="crt-vignette-hover z-10" />
        </div>
        <div className="px-4 text-black justify-center flex flex-col gap-3 bg-white py-6 lg:py-2 relative z-20">
          <h2 className="crt-title-black text-2xl md:text-4xl font-bold">
            {title}
          </h2>
          <p className="text-sm md:text-lg line-clamp-4 lg:line-clamp-none">
            {desc}
          </p>
          <div className="flex gap-4 items-center ">
            {techstack.map((t, i) => (
              <span
                key={i}
                className="text-4xl space-x-3 mt-4"
                style={{ color: t.brandColor }}
              >
                {t.node}
              </span>
            ))}
          </div>
          <div className="flex flex-col md:flex-row mt-4 lg:mt-12 gap-3 md:gap-5">
            <Link className="flex-1" to={webLink}>
              <Button className="w-full h-10 md:h-12 flex justify-between items-center text-sm md:text-xl font-bold border-2 border-black shadow-sm shadow-black text-black">
                <span>[</span>
                <span>Live Website</span>
                <span>]</span>
              </Button>
            </Link>

            <Link className="flex-1" to={repoLink}>
              <Button className="w-full h-10 md:h-12 flex justify-between items-center text-sm md:text-xl font-bold border-2 border-black shadow-sm shadow-black text-black">
                <span>[</span>
                <span>View Code</span>
                <span>]</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

const ProjectCard = ({
  img,
  title,
  desc,
  techstack,
  webLink,
  repoLink,
}: ProjectCardProps) => {
  return (
    <Card className="group hover:-translate-y-2 transition-all duration-300 overflow-hidden flex w-full shadow-md shadow-white bg-white flex-col border-none">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 glitch-hover-effect"
        />
        {/* Custom Retro Vignette Overlay */}
        <div className="crt-vignette-hover z-10" />

        <div
          className="
    absolute inset-0 z-20
    flex items-center justify-center gap-3
    bg-black/40
    opacity-0
    transition-opacity duration-300
    group-hover:opacity-100
    p-4
  "
        >
          <Link to={repoLink}>
            <Button
              className="
      px-3 py-2 text-xs md:text-sm
      
       
      translate-y-4
      group-hover:translate-y-0
      transition-all duration-300
    "
            >
              <GithubIcon className="size-4 mr-1" />
              Code
            </Button>
          </Link>

          <Link to={webLink}>
            <Button
              className="
      px-3 py-2 text-xs md:text-sm
      translate-y-4
      group-hover:translate-y-0
      transition-all duration-300
    "
            >
              <LinkIcon className="size-4 mr-1" />
              Live
            </Button>
          </Link>
        </div>
      </div>

      <div className="p-4 text-black flex-1 flex flex-col relative z-20 bg-white">
        <h2 className="crt-title-black mb-2 text-black! text-xl md:text-2xl font-bold">
          {title}
        </h2>
        <p className="text-sm mb-4 flex-1">{desc}</p>
        <div className="flex gap-3 items-center ">
          {techstack.map((t, i) => (
            <span
              key={i}
              className="text-2xl space-x-3 mt-4"
              style={{ color: t.brandColor }}
            >
              {t.node}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

const Projects = () => {
  const featuredProject = projectsData.filter((p) => p.isFeatured);
  const projects = projectsData.filter((p) => !p.isFeatured);

  return (
    <section id="project" className="text-white relative min-h-screen mb-20">
      <h1 className="crt-title text-4xl md:text-7xl font-bold mb-10">
        Featured Projects
      </h1>
      <div className="flex flex-col gap-10">
        {featuredProject.map((p, i) => (
          <FeaturedProject
            title={p.title}
            img={p.img}
            techstack={p.techstack}
            desc={p.desc}
            webLink={p.webLink}
            repoLink={p.repoLink}
            key={i}
          />
        ))}

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              title={p.title}
              img={p.img}
              techstack={p.techstack}
              desc={p.desc}
              webLink={p.webLink}
              repoLink={p.repoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
