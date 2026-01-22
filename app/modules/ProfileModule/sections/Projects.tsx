import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { GithubIcon, LinkIcon } from "lucide-react";
import { projectsData } from "../payload";
import type { ReactNode } from "react";
import { Link } from "react-router";
import { motion, type Variants } from "motion/react";

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

const cardContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

const cardItem: Variants = {
  hidden: {
    y: 32,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      y: {
        type: "spring",
        stiffness: 280,
        damping: 22,
        mass: 0.6,
      },
      opacity: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const MotionCard = motion(Card);

const FeaturedProject = ({
  img,
  title,
  desc,
  techstack,
  webLink,
  repoLink,
}: ProjectCardProps) => {
  return (
    <MotionCard
      variants={cardItem}
      className="shadow-md shadow-white   overflow-hidden group border-none"
    >
      <div className="flex flex-col lg:flex-row relative">
        <div className="relative w-full lg:min-w-2xl h-64 md:h-80 lg:h-96 overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 glitch-hover-effect"
          />
          <div className="crt-vignette-hover z-10" />
        </div>

        <div className="px-4  text-black flex flex-col gap-3 bg-white py-6 lg:py-5 relative z-20">
          <h2 className="crt-title-black text-2xl md:text-4xl font-bold">
            {title}
          </h2>

          <p className="text-sm md:text-lg line-clamp-4 lg:line-clamp-none">
            {desc}
          </p>

          <div className="flex gap-4 items-center">
            {techstack.map((t, i) => (
              <span
                key={i}
                className="text-4xl mt-4"
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
    </MotionCard>
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
    <Card className="h-full group hover:-translate-y-2 transition-all duration-300 overflow-hidden flex w-full shadow-md shadow-white bg-white flex-col border-none">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 glitch-hover-effect"
        />

        <div className="crt-vignette-hover z-10" />

        <div className="absolute inset-0 z-20 flex items-center justify-center gap-3 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4">
          <Link to={repoLink}>
            <Button className="px-3 py-2 text-xs md:text-sm translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <GithubIcon className="size-4 mr-1" />
              Code
            </Button>
          </Link>

          <Link to={webLink}>
            <Button className="px-3 py-2 text-xs md:text-sm translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <LinkIcon className="size-4 mr-1" />
              Live
            </Button>
          </Link>
        </div>
      </div>

      <div className="p-4 text-black flex-1 flex flex-col bg-white">
        <h2 className="crt-title-black mb-2 text-xl md:text-2xl font-bold">
          {title}
        </h2>

        <p className="text-sm mb-4 flex-1">{desc}</p>

        <div className="flex gap-3 items-center">
          {techstack.map((t, i) => (
            <span
              key={i}
              className="text-2xl mt-4"
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
    <section
      id="project"
      className="text-white flex flex-col max-md:mt-10 relative min-h-screen mb-20"
    >
      <h1 className="crt-title text-4xl md:text-7xl font-bold mb-10">
        Featured Projects
      </h1>

      <motion.div
        variants={cardContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col gap-10 mb-16"
      >
        {featuredProject.map((p, i) => (
          <FeaturedProject key={i} {...p} />
        ))}
      </motion.div>

      <motion.div
        variants={cardContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((p, i) => (
          <motion.div key={i} variants={cardItem} className="h-full">
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </motion.div>
      <div className="w-full items-center text-center mt-10">
        <h2 className="text-lg">
          Discover more on{" "}
          <Link to={"https://github.com/VazhaK14"}>
            <span className="text-green-500 font-bold hover:underline">
              Github
            </span>
          </Link>
        </h2>
      </div>
    </section>
  );
};

export default Projects;
