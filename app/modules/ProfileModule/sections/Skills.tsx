import LogoLoop from "~/components/LogoLoop";
import { techLogos } from "../payload";

const Skills = () => {
  return (
    <section className="relative pb-30 mt-20 px-12">
      <h1 className="text-7xl font-bold crt-title scanlines ">My Skills</h1>
      <div className="w-full border shadow-lg shadow-white py-4 border-white mt-20">
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
    </section>
  );
};

export default Skills;
