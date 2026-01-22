"use client";
import { useEffect, useState, useRef } from "react";
import { FolderIcon, FolderOpenIcon, TerminalIcon } from "lucide-react";

interface NavLinkProps {
  label: string;
  href: string;
  isActive: boolean; // Tambahkan prop isActive
  onClick?: () => void;
}

const MENU_DATA = [
  { label: "Home", id: "home" },
  { label: "Profile", id: "profile" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "project" },
  { label: "Contact", id: "contact" },
];

const NavLink = ({ label, href, isActive, onClick }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
    if (onClick) onClick();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`group relative font-mono text-lg transition-all duration-300 ${
        isActive ? "text-green-500" : "text-white hover:text-green-500"
      }`}
    >
      <span
        className={`inline-block transition-all duration-300 text-green-500 mr-1 ${
          isActive
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
        }`}
      >
        [
      </span>
      <span className="relative uppercase">{label}</span>
      <span
        className={`inline-block transition-all duration-300 text-green-500 ml-1 ${
          isActive
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
        }`}
      >
        ]
      </span>
    </a>
  );
};

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // State untuk section aktif

  const lastScrollY = useRef(0);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null); // Ref untuk timer idle
  const boxRef = useRef<HTMLDivElement | null>(null);

  const handleMobileClick = (id: string) => {
    setIsOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 1. Logic: Hide on Scroll Down, Show on Scroll Up / IDLE
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Sembunyikan jika scroll ke bawah, munculkan jika scroll ke atas
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;

      // LOGIKA IDLE: Jika diam selama 2 detik, munculkan navbar
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, []);

  // 2. Logic: Intersection Observer untuk Active Section
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "-40% 0px -40% 0px", // Memicu perubahan saat section ada di tengah layar
      threshold: 0,
    });

    MENU_DATA.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed top-4 left-5 md:left-0 text-white w-full flex items-center z-[999] justify-end md:justify-center px-10 py-4 md:py-8 transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-40 opacity-0"
        }`}
      >
        <nav className="flex flex-wrap w-fit md:w-2xl h-15 md:h-14 items-center  justify-center bg-white/10 backdrop-blur-md max-md:border-2 border border-primary-1 shadow-white rounded-full px-4 md:px-8 py-3">
          <div className="flex max-md:hidden flex-row text-center items-center font-semibold text-md font-visby gap-2 text-primary-1">
            {MENU_DATA.map((m, i) => (
              <NavLink
                key={i}
                label={m.label}
                href={`#${m.id}`}
                isActive={activeSection === m.id}
              />
            ))}
          </div>
          <TerminalIcon
            onClick={() => setIsOpen(!isOpen)}
            className="size-7 md:hidden text-primary-1 hover:cursor-pointer"
          />
        </nav>
      </div>

      {/* Mobile View */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed flex px-6 md:hidden md:pointer-events-none text-white ${
          isOpen
            ? "bg-black/40 opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } flex-col pb-24 bg-none transition-all duration-700 h-screen w-screen items-center justify-center z-[999] gap-20`}
      >
        <div
          ref={boxRef}
          onClick={(e) => e.stopPropagation()}
          className={`${
            !isOpen ? "translate-y-200" : "translate-y-0"
          } py-12 w-full border transition-all duration-500 border-white bg-black p-4 shadow-white shadow-sm`}
        >
          <p>
            guest@portfolio:~$ ls ./Menu{" "}
            <span className="animate-cursor inline-block">█</span>
          </p>
          <ul className="mt-2 space-y-1">
            {MENU_DATA.map((m, i) => (
              <li
                key={i}
                className={`flex gap-2 items-center cursor-pointer transition-colors ${
                  activeSection === m.id
                    ? "text-green-500"
                    : "hover:text-green-500"
                }`}
                onClick={() => handleMobileClick(m.id)}
              >
                {activeSection === m.id ? (
                  <FolderOpenIcon
                    className={`size-5 ${activeSection === m.id ? "fill-green-500/20" : ""}`}
                  />
                ) : (
                  <FolderIcon
                    className={`size-5 ${activeSection === m.id ? "fill-green-500/20" : ""}`}
                  />
                )}
                <span>{m.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
