import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiReactrouter,
  SiPostgresql,
  SiHono,
  SiCplusplus,
  SiC,
  SiPython,
  SiRailway,
  SiFirebase,
  SiMongodb,
  SiDjango,
  SiFlutter,
  SiPrisma,
  SiShadcnui,
} from "react-icons/si";

import {
  siReact,
  siTypescript,
  siTailwindcss,
  siNestjs,
  siReactrouter,
  siPostgresql,
  siHono,
  siCplusplus,
  siC,
  siPython,
  siFirebase,
  siMongodb,
  siDjango,
  siFlutter,
  siPrisma,
  siShadcnui,
  siRailway,
} from "simple-icons";

export const filesData = {
  "aboutme.txt": `Vazha Khayri, a software engineering with a security-first mindset,
designing and building systems by understanding how data flows,
where risks emerge, and how vulnerabilities can be mitigated at every layer.
interest lies in creating reliable, scalable, and secure products
that solve real-world problems.`,
  "whatido.txt":
    "> Fullstack Developer: Building digital products through Website, Mobile, and Desktop \n> Cybersecurity Enthusiast: Currently learning DevOps & Web Exploitation",
  "education.txt":
    "Undergraduate Information System, Universitas Indonesia (2024 - 2028)",
};

export const VAZHAFETCH = `    /\\_____/\\       vazha khayri
   /  o   o  \\      --------------
  ( ==  ^  == )     OS:      Arch Linux
   )         (      KERNEL:  6.18.5-arch1-1
  (           )     SHELL:   fish
 ( (  )   (  ) )    DE:      Hyprland
(__(__)___(__)__)   CPU:     AMD Ryzen 5 5600H
                    MEM:     16GB`;

export const bootSequence = [
  ":: running early hook [udev]",
  ":: running early hook [vazhiso]",
  ":: Triggering uevents...",
  "[    0.000000] Porto version 2.x.x-vazh1-1",
  "[    0.000000] Command line: initrd=/initramfs-linux.img",
  "[    1.234567] random: crng init done",
  ":: mounting '/dev/disk/by-label/VZHA_2026' to '/run/vzhaiso/bootmnt'",
  ":: mounting root filesystem",
  "[  OK  ] Mounted /",
  "[  OK  ] Mounted /proc",
  "[  OK  ] Mounted /sys",
  "[  OK  ] Reached target Local File Systems",
  ":: Starting udev version 255",
  "[  OK  ] Started Load Kernel Modules",
  "[  OK  ] Started Apply Kernel Variables",
  ":: Detecting hardware...",
  ":: Loading necessary modules...",
  "[  OK  ] Initialized network interface",
  ":: Starting Vazha Porto installation environment",
  "------------------------------------------",
];

export const techLogos = [
  { node: <SiReact />, title: "React", brandColor: `#${siReact.hex}` },

  {
    node: <SiNextdotjs />,
    title: "Next.js",
  },

  {
    node: <SiTypescript />,
    title: "TypeScript",
    brandColor: `#${siTypescript.hex}`,
  },

  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    brandColor: `#${siTailwindcss.hex}`,
  },

  { node: <SiNestjs />, title: "NestJS", brandColor: `#${siNestjs.hex}` },

  { node: <SiHono />, title: "Hono", brandColor: `#${siHono.hex}` },

  {
    node: <SiReactrouter />,
    title: "React Router",
    brandColor: `#${siReactrouter.hex}`,
  },

  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
    brandColor: `#${siPostgresql.hex}`,
  },

  { node: <SiC />, title: "C", brandColor: `#${siC.hex}` },

  { node: <SiCplusplus />, title: "C++", brandColor: `#${siCplusplus.hex}` },

  { node: <SiPython />, title: "Python", brandColor: `#${siPython.hex}` },

  { node: <SiFlutter />, title: "Flutter", brandColor: `#${siFlutter.hex}` },

  { node: <SiDjango />, title: "Django", brandColor: `#${siDjango.hex}` },

  { node: <SiMongodb />, title: "MongoDB", brandColor: `#${siMongodb.hex}` },

  { node: <SiFirebase />, title: "Firebase", brandColor: `#${siFirebase.hex}` },

  { node: <SiRailway />, title: "Railway" },
  { node: <SiPrisma />, title: "Railway", brandColor: `#${siPrisma.hex}` },
  { node: <SiShadcnui />, title: "ShadCn" },
];

export const experiences = [
  {
    title: "BEM FASILKOM UI",
    date: "Jul 2025 - Dec 2025",
    image: "/projects/bempacil-logo.png",
    role: "Deputy of Business and Partnership Bureau",
    desc: [
      "Co-leading 15 bureau members in the fields of SE, UI/UX, and PM",
      "Developed JituPTN using Next.js & Nest.js for scalable modern UTBK Tryout app, utilizing Railway as PaaS for production",
      "Maintained & Developed Pemira FISIP Website using Next.js, utilizing server-side for monorepo, and Railway as PaaS for production",
    ],
  },
  {
    title: "BEM UI",
    date: "Aug 2025 - Dec 2025",
    image: "/projects/bemui-logo.jpg",
    role: "Software Engineer of Multimedia Bureau",
    desc: [
      "Developed Multi-Event Recruitment Platform SPT (Sistem Perekrutan Terbuka) using Next.js & Hono",
      "Craeted 2 application modules using modern interface utilizing ShadCN.",
      "Application purpose to multiple UI student organization can effectively manage open recruitment for various events.",
    ],
  },
  {
    title: "UI Innovation War",
    date: "Aug 2025 - Nov 2025",
    image: "/projects/uiiw-logo.webp",
    role: "Software Engineer of Operational",
    desc: [
      "Developed profile & registration website interface using Next.js.",
      "Designed 2 primary sections UI/UX website using Figma.",
      "Managed repository structure and controlling git flow around developer team.",
    ],
  },
  {
    title: "COMPFEST 17",
    date: "Jan 2024 - Sept 2024",
    image: "/projects/compfest-logo.png",
    role: "Software Engineer Academy Expert Staff",
    desc: [
      "Developed selection & final Task for SE Academy candidates",
      "Grading 10+ tasks across various techstack",
      "Actively participated in an exclusive workshop SE Academy Compfest with Industrial Experts",
    ],
  },
  {
    title: "PT Karya Dimensi Nugraha (Freelance)",
    date: "Jul 2024 - Nov 2024",
    image: "/projects/kda.png",
    role: "Frontend Web Developer",
    desc: [
      "Built responsive, production-ready user interface using Next.js",
      "Delivered a scalable portfolio profile website to strengthen startup's brand identity",
      "Collaborated with stakeholders to translate business requirements into a clean, user-friendly portfolio website",
    ],
  },
  {
    title: "Open House Fasilkom UI 2024",
    date: "Jul 2024 - Nov 2024",
    role: "Human Resource of IT Development Team",
    image: "/projects/oh-logo.webp",
    desc: [
      "Built and Optimized a responsive user interface using Next.js",
      "Developed a website to introduce Fasilkom UI to the general public",
      "First project I handled through learning process in web development",
    ],
  },
];

export const projectsData = [
  {
    img: "/projects/oh.png",
    title: "OH Fasilkom UI 2024",
    desc: "Open House Fasilkom UI is annual event to introduce and promote Fasilkom UI. as a Human Resource, I've learned a lot about Web Development and make my part on 2 primary sections in the website.",
    techstack: [
      { node: <SiReact />, title: "React", brandColor: `#${siReact.hex}` },

      {
        node: <SiNextdotjs />,
        title: "Next.js",
      },

      {
        node: <SiTypescript />,
        title: "TypeScript",
        brandColor: `#${siTypescript.hex}`,
      },

      {
        node: <SiTailwindcss />,
        title: "Tailwind CSS",
        brandColor: `#${siTailwindcss.hex}`,
      },
    ],
    webLink: "https://oh.cs.ui.ac.id",
    repoLink: "https://github.com/OH-Fasilkom-UI",
    isFeatured: false,
  },
  {
    img: "/projects/oh.png",
    title: "PT Karya Dimensi Nugraha",
    desc: "PT Karya Dimensi Nugraha is a construction startup. I've developed their company profile website, creating professional profile for their company and displaying projects to engage potential clients.",
    techstack: [
      {
        node: <SiReact />,
        title: "React",
        brandColor: `#${siReact.hex}`,
      },

      {
        node: <SiNextdotjs />,
        title: "Next.js",
      },

      {
        node: <SiTypescript />,
        title: "TypeScript",
        brandColor: `#${siTypescript.hex}`,
      },

      {
        node: <SiTailwindcss />,
        title: "Tailwind CSS",
        brandColor: `#${siTailwindcss.hex}`,
      },
    ],
    webLink: "https://www.karyadimensinugraha.com/",
    repoLink: "https://github.com/hsyadid/KDA-Web",
    isFeatured: false,
  },
  {
    img: "/projects/oh.png",
    title: "SPT BEM UI",
    desc: "Website providing recruitment management system and engagement for UI student event organizers to register and manage recruitments to official BEM UI SPT website.",
    techstack: [
      { node: <SiReact />, title: "React", brandColor: `#${siReact.hex}` },

      {
        node: <SiNextdotjs />,
        title: "Next.js",
      },

      {
        node: <SiTypescript />,
        title: "TypeScript",
        brandColor: `#${siTypescript.hex}`,
      },

      {
        node: <SiTailwindcss />,
        title: "Tailwind CSS",
        brandColor: `#${siTailwindcss.hex}`,
      },
      {
        node: <SiHono />,
        title: "Hono",
        brandColor: `#${siHono.hex}`,
      },
      {
        node: <SiPostgresql />,
        title: "Hono",
        brandColor: `#${siPostgresql.hex}`,
      },
      {
        node: <SiRailway />,
        title: "Railway",
        brandColor: `#${siRailway.hex}`,
      },
    ],
    webLink: "",
    repoLink: "https://github.com/Badan-Eksekutif-Mahasiswa",
    isFeatured: true,
  },

  {
    img: "/projects/oh.png",
    title: "Pemira FISIP UI 2025",
    desc: "Developed and maintained the E-Voting website for Fakultas Ilmu Sosial dan Ilmu Politik (FISIP) Universitas Indonesia. Enhanced existing features from the previous year’s system, improved scalability to support a larger voting volume, and deployed a production-ready server infrastructure using Railway.",
    techstack: [
      { node: <SiReact />, title: "React", brandColor: `#${siReact.hex}` },

      {
        node: <SiNextdotjs />,
        title: "Next.js",
      },

      {
        node: <SiTypescript />,
        title: "TypeScript",
        brandColor: `#${siTypescript.hex}`,
      },

      {
        node: <SiTailwindcss />,
        title: "Tailwind CSS",
        brandColor: `#${siTailwindcss.hex}`,
      },

      {
        node: <SiPostgresql />,
        title: "Tailwind CSS",
        brandColor: `#${siPostgresql.hex}`,
      },

      {
        node: <SiRailway />,
        title: "Tailwind CSS",
        brandColor: `#${siRailway.hex}`,
      },
    ],
    webLink: "",
    repoLink: "",
    isFeatured: false,
  },
];
