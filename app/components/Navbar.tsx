"use client";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FolderIcon, FolderOpenIcon, TerminalIcon } from "lucide-react";
import { useRef } from "react";

interface NavLinkProps {
  label: string;
}

const MENU_DATA = ["Home", "Profile", "Experience", "Projects", "Skill"];

const NavLink = ({ label }: NavLinkProps) => {
  return (
    <Link
      to="#"
      className="group relative font-mono text-lg text-white hover:text-green-500  transition-all duration-300"
    >
      <span className="inline-block opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-green-500 mr-1">
        [
      </span>
      <span className="relative uppercase">{label}</span>
      <span className="inline-block opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-green-500 ml-1">
        ]
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <>
      <div
        className={`fixed top-4 left-5 md:left-0 text-white  w-full flex items-center z-999 justify-end md:justify-center px-10 py-4 md:py-8 transition-all duration-500 delay-300 ${
          isVisible ? "translate-y-0" : "-translate-y-25"
        }`}
      >
        <nav
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-wrap w-fit md:w-2xl h-15 md:h-14 items-center shadow-sm  justify-center bg-white/10 backdrop-blur-xs max-md:border-2 border border-primary-1 shadow-white rounded-full  px-4 md:px-8 py-3"
        >
          <div className="flex max-md:hidden flex-row text-center items-center font-semibold text-md font-visby gap-2 text-primary-1">
            {MENU_DATA.map((m, i) => (
              <NavLink key={i} label={m} />
            ))}
          </div>
          <TerminalIcon className="size-7 md:hidden text-primary-1  hover:cursor-pointer " />
        </nav>
      </div>

      {/* Mobile View */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed  flex sm: px-6 md:hidden md:pointer-events-none text-white ${isOpen ? "bg-black/40 opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} flex-col pb-24 bg-none transition-all duration-700 h-screen w-screen items-center justify-center z-999 gap-20`}
      >
        <div
          ref={boxRef}
          onClick={(e) => e.stopPropagation()}
          className={`${!isOpen ? "translate-y-200" : "translate-y-0"}  w-full border transition-all scanlines duration-500  border-green-500 bg-black p-4 shadow-green-500 shadow-sm`}
        >
          <p>
            guest@portfolio:~$ ls ./Menu{" "}
            <span className="animate-cursor inline-block">█</span>
          </p>
          <ul className="mt-2 space-y-1">
            {MENU_DATA.map((m, i) => (
              <li key={i} className="flex gap-2 items-center ">
                <FolderIcon className="size-5" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
