import LetterGlitch from "~/components/LetterGlitch";
import TextType from "~/components/TextType";
import DecryptedText from "~/components/DecryptedText";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import { SOCIAL_MEDIA } from "../payload";

import { ArrowDownIcon } from "lucide-react";

import { motion, type Variants } from "motion/react";

const springUp: Variants = {
  hidden: {
    y: 28,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      y: {
        type: "spring",
        stiffness: 90,
        damping: 22,
        mass: 1.2,
      },
      opacity: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

const Hero = () => {
  const handleToProfile = () => {
    document.getElementById("profile")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative flex flex-col text-white h-fit">
      <LetterGlitch
        glitchSpeed={50}
        centerVignette
        outerVignette={false}
        smooth
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col text-center gap-6"
        >
          <motion.h1 variants={springUp}>
            <DecryptedText
              text="Vazha Khayri"
              speed={60}
              animateOn="view"
              revealDirection="start"
              sequential
              parentClassName="text-7xl max-md:text-6xl crt-title font-bold"
              useOriginalCharsOnly={false}
            />
          </motion.h1>

          {/* ================= ROLE ================= */}
          <motion.h2 variants={springUp}>
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
          </motion.h2>

          <motion.div variants={springUp} className="flex justify-center gap-5">
            <Button
              onClick={handleToContact}
              className="text-white md:h-12 text-sm md:text-xl"
            >
              [ Contact Me ]
            </Button>
            <Link
              to={
                "https://docs.google.com/document/d/1VuxLwIDOdUcAbjX5XHmOr9k0Nk386DhrnURmx8l7sTI/edit?usp=sharing"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="text-white md:h-12 text-sm md:text-xl">
                [ Download CV ]
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="flex justify-center gap-4"
          >
            {SOCIAL_MEDIA.map((sm, i) => (
              <motion.div key={i} variants={springUp}>
                <Link to={sm.link} target="_blank" rel="noopener noreferrer">
                  <Button className="w-10 h-10 md:w-12 md:h-12">
                    {sm.icon}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </LetterGlitch>

      <button
        onClick={handleToProfile}
        className="absolute left-1/2 bottom-50 sm:bottom-96
          -translate-x-1/2 rounded-full px-3 h-11
          bg-black/20 backdrop-blur-xs border
          shadow-sm shadow-white
          hover:border-green-500 hover:text-green-500
          hover:shadow-green-500
          animate-bounce cursor-pointer z-50"
      >
        <ArrowDownIcon className="size-5" />
      </button>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2
        bg-linear-to-t from-black via-black/90 to-transparent"
      />
    </section>
  );
};

export default Hero;
