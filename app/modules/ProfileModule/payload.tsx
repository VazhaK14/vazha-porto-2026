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
} from "simple-icons";
import LogoLoop from "~/components/LogoLoop";

export const filesData = {
  "aboutme.txt":
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia provident ea nisi quos, quia necessitatibus eaque voluptas aliquid mollitia labore doloribus illum similique magni a tenetur vero magnam repudiandae nesciunt!",
  "hobby.txt":
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia provident ea nisi quos, quia necessitatibus eaque voluptas aliquid mollitia labore doloribus illum similique magni a tenetur vero magnam repudiandae nesciunt!",
  "skills.txt":
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia provident ea nisi quos, quia necessitatibus eaque voluptas aliquid mollitia labore doloribus illum similique magni a tenetur vero magnam repudiandae nesciunt!",
  "fav_animal.txt":
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia provident ea nisi quos, quia necessitatibus eaque voluptas aliquid mollitia labore doloribus illum similique magni a tenetur vero magnam repudiandae nesciunt!",
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
];

export const experiences = [
  {
    title: "Open House Fasilkom UI 2024",
    date: "Jul 2024 - Nov 2024",
    role: "Human Resource of IT Development Team",
    image: "/projects/oh-logo.webp",
    desc: [
      "Built and Optimized a dynamic user interface using Next.js and Tanstack Query, enhancing performance and data handling on the web platform",
      "Developed a website to introduce Fasilkom UI to the general public, expected to be viewed by over 800 users",
      "Managed the backend using Hono, Prisma ORM, and Neon for efficient and robust functionality",
    ],
  },
  {
    title: "PT Karya Dimensi Nugraha",
    date: "Jul 2024 - Nov 2024",
    image: "/projects/kda.png",
    role: "Frontend Web Developer",
    desc: [
      "Built and Optimized a dynamic user interface using Next.js and Tanstack Query, enhancing performance and data handling on the web platform",
      "Developed a website to introduce Fasilkom UI to the general public, expected to be viewed by over 800 users",
      "Managed the backend using Hono, Prisma ORM, and Neon for efficient and robust functionality",
    ],
  },
  {
    title: "Open House Fasilkom UI 2024",
    date: "Jul 2024 - Nov 2024",
    role: "Frontend Web Developer",
    image: "/projects/oh-logo.webp",
    desc: [
      "Built and Optimized a dynamic user interface using Next.js and Tanstack Query, enhancing performance and data handling on the web platform",
      "Developed a website to introduce Fasilkom UI to the general public, expected to be viewed by over 800 users",
      "Managed the backend using Hono, Prisma ORM, and Neon for efficient and robust functionality",
    ],
  },
  {
    title: "Open House Fasilkom UI 2024",
    date: "Jul 2024 - Nov 2024",
    role: "Frontend Web Developer",
    image: "/projects/oh-logo.webp",
    desc: [
      "Built and Optimized a dynamic user interface using Next.js and Tanstack Query, enhancing performance and data handling on the web platform",
      "Developed a website to introduce Fasilkom UI to the general public, expected to be viewed by over 800 users",
      "Managed the backend using Hono, Prisma ORM, and Neon for efficient and robust functionality",
    ],
  },
  {
    title: "Open House Fasilkom UI 2024",
    date: "Jul 2024 - Nov 2024",
    role: "Frontend Web Developer",
    image: "/projects/oh-logo.webp",
    desc: [
      "Built and Optimized a dynamic user interface using Next.js and Tanstack Query, enhancing performance and data handling on the web platform",
      "Developed a website to introduce Fasilkom UI to the general public, expected to be viewed by over 800 users",
      "Managed the backend using Hono, Prisma ORM, and Neon for efficient and robust functionality",
    ],
  },
  {
    title: "Open House Fasilkom UI 2024",
    date: "Jul 2024 - Nov 2024",
    role: "Frontend Web Developer",
    image: "/projects/oh-logo.webp",
    desc: [
      "Built and Optimized a dynamic user interface using Next.js and Tanstack Query, enhancing performance and data handling on the web platform",
      "Developed a website to introduce Fasilkom UI to the general public, expected to be viewed by over 800 users",
      "Managed the backend using Hono, Prisma ORM, and Neon for efficient and robust functionality",
    ],
  },
];

export const projectsData = [
  {
    img: "/projects/oh.png",
    title: "OH Fasilkom UI 2024",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro earum et fugit accusamus molestias omnis rem, sequi fuga vel quasi aspernatur consectetur distinctio reiciendis nobis necessitatibus praesentium numquam quas expedit",
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
    isFeatured: true,
  },
  {
    img: "/projects/oh.png",
    title: "OH Fasilkom UI 2024",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro earum et fugit accusamus molestias omnis rem, sequi fuga vel quasi aspernatur consectetur distinctio reiciendis nobis necessitatibus praesentium numquam quas expedit",
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
    webLink: "",
    repoLink: "",
    isFeatured: false,
  },
  {
    img: "/projects/oh.png",
    title: "OH Fasilkom UI 2024",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro earum et fugit accusamus molestias omnis rem, sequi fuga vel quasi aspernatur consectetur distinctio reiciendis nobis necessitatibus praesentium numquam quas expedit",
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
    webLink: "",
    repoLink: "",
    isFeatured: false,
  },
  {
    img: "/projects/oh.png",
    title: "OH Fasilkom UI 2024",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro earum et fugit accusamus molestias omnis rem, sequi fuga vel quasi aspernatur consectetur distinctio reiciendis nobis necessitatibus praesentium numquam quas expedit",
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
    webLink: "",
    repoLink: "",
    isFeatured: false,
  },
  {
    img: "/projects/oh.png",
    title: "OH Fasilkom UI 2024",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro earum et fugit accusamus molestias omnis rem, sequi fuga vel quasi aspernatur consectetur distinctio reiciendis nobis necessitatibus praesentium numquam quas expedit",
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
    webLink: "",
    repoLink: "",
    isFeatured: false,
  },
  {
    img: "/projects/oh.png",
    title: "OH Fasilkom UI 2024",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro earum et fugit accusamus molestias omnis rem, sequi fuga vel quasi aspernatur consectetur distinctio reiciendis nobis necessitatibus praesentium numquam quas expedit",
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
    webLink: "",
    repoLink: "",
    isFeatured: false,
  },
];
