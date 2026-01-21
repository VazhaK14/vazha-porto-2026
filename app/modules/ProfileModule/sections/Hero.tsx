import LetterGlitch from "~/components/LetterGlitch";
import TextType from "~/components/TextType";
import { Button } from "~/components/ui/button";
import {
  GithubIcon,
  InstagramIcon,
  MailIcon,
  LinkedinIcon,
  ArrowDownIcon,
} from "lucide-react";

const SOCIAL_MEDIA_ICON = [
  <InstagramIcon className="size-7" />,
  <GithubIcon className="size-7" />,
  <LinkedinIcon className="size-7" />,
  <MailIcon className="size-7" />,
];

const Hero = () => {
  const handleToProfile = () => {
    const profileSection = document.getElementById("profile");
    if (profileSection) {
      profileSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="home" className="h-fit relative text-white flex-col flex">
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      >
        <div className="flex flex-col text-center gap-6">
          <div className=" space-y-3 ">
            <h1 className=" text-7xl max-md:text-6xl text-white crt-title font-bold">
              Vazha <br className="md:hidden" /> Khayri
            </h1>
            <TextType
              text={[
                "Fullstack Developer",
                "Cybersecurity Enthusiast",
                "Information System \n Student",
                "Code for fun!",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="█"
              deletingSpeed={50}
              cursorBlinkDuration={0.5}
              className="text-white text-2xl md:text-4xl"
            />
          </div>
          <div className="flex justify-center gap-5">
            <Button className="text-white md:h-12 text-sm md:text-xl">
              [ Contact Me ]{" "}
            </Button>
            <Button className="text-white md:h-12 text-sm md:text-xl">
              [ Download CV ]
            </Button>
          </div>
          <div className="space-x-4">
            {SOCIAL_MEDIA_ICON.map((icon, i) => (
              <Button key={i} className="w-10 h-10 md:w-12 md:h-12">
                {icon}
              </Button>
            ))}
          </div>
        </div>
      </LetterGlitch>
      <button
        onClick={handleToProfile}
        className="text-white absolute left-1/2 bottom-50 sm:bottom-96 backdrop-blur-xs bg-black/20 appearance-none animate-bounce rounded-full h-11 hover:border-green-500 hover:text-green-500 cursor-pointer  shadow-sm shadow-white hover:shadow-green-500 w-fit px-3 border -translate-x-1/2 z-998 text-center "
      >
        <ArrowDownIcon className="size-5" />
      </button>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black via-black/90 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
