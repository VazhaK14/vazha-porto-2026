import AnimatedList from "~/components/AnimatedList";
import { experiences } from "../payload";

const Experience = () => {
  return (
    <section className="text-white min-h-screen w-full max-md:mt-10 relative ">
      <h1 className="crt-title text-4xl max-md:mb-10 md:text-7xl font-bold">
        Experience
      </h1>
      <AnimatedList
        items={experiences}
        onItemSelect={(item, index) => console.log(item, index)}
        showGradients
        enableArrowNavigation
        displayScrollbar
        className="w-full md:mt-10"
      />
    </section>
  );
};

export default Experience;
