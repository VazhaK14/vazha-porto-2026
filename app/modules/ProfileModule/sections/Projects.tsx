import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { SiNextdotjs, SiTailwindcss, SiReact } from "react-icons/si";
import { siTailwindcss, siReact } from "simple-icons";

const FeaturedProject = () => {
  return (
    <Card className="shadow-md shadow-white">
      <div className="flex flex-col md:flex-row  ">
        <img
          src="/projects/oh.png"
          alt="OH Image"
          className="w-2xl h-96 object-cover"
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

const Projects = () => {
  return (
    <section className="text-white relative min-h-screen">
      <h1 className="crt-title text-4xl max-md:mb-10 md:text-7xl font-bold scanlines">
        Featured Projects
      </h1>
      <div className="w-fit flex flex-col mt-10">
        <FeaturedProject />
        <div className="mt-10 flex gap-5 flex-row w-fit">
          <Card className="flex bg-white flex-col">
            <img
              src="/projects/oh.png"
              alt="OH Image"
              className="w-lg object-cover"
            />
            <div className="px-4 text-black mt-4">
              <h2 className="crt-title text-black! text-3xl  font-bold">
                OH Fasilkom UI 2024
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, aliquid doloribus quia quod excepturi quibusdam ullam,
                accusantium sit eligendi, at vitae itaque id nam quasi. Totam
                odio laboriosam veniam non!
              </p>
            </div>
          </Card>
          <Card className="flex  bg-white flex-col">
            <img
              src="/projects/oh.png"
              alt="OH Image"
              className="w-lg object-cover"
            />
            <div className="px-4 text-black mt-4">
              <h2 className="crt-title text-black! text-3xl  font-bold">
                OH Fasilkom UI 2024
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, aliquid doloribus quia quod excepturi quibusdam ullam,
                accusantium sit eligendi, at vitae itaque id nam quasi. Totam
                odio laboriosam veniam non!
              </p>
            </div>
          </Card>
          <Card className="flex  bg-white flex-col">
            <img
              src="/projects/oh.png"
              alt="OH Image"
              className="w-lg object-cover"
            />
            <div className="px-4 text-black mt-4">
              <h2 className="crt-title text-black! text-3xl  font-bold">
                OH Fasilkom UI 2024
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, aliquid doloribus quia quod excepturi quibusdam ullam,
                accusantium sit eligendi, at vitae itaque id nam quasi. Totam
                odio laboriosam veniam non!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
