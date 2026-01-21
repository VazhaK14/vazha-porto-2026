import LogoLoop from "~/components/LogoLoop";
import { techLogos } from "../payload";
import { Card, CardHeader, CardTitle } from "~/components/ui/card";

const Skills = () => {
  return (
    <section id="skill" className="relative mt-10 ">
      <Card>
        <CardHeader className="">
          <CardTitle>My Skills</CardTitle>
        </CardHeader>
        <div className="w-full  shadow-lg shadow-white py-4 border-white mt-2">
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            className="text-white"
            fadeOutColor="#000000"
            ariaLabel="Technology partners"
          />
        </div>
      </Card>
    </section>
  );
};

export default Skills;
