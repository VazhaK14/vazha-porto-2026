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
  siNextdotjs,
  siTypescript,
  siTailwindcss,
  siNestjs,
  siReactrouter,
  siPostgresql,
  siHono,
  siCplusplus,
  siC,
  siPython,
  siRailway,
  siFirebase,
  siMongodb,
  siDjango,
  siFlutter,
  siPrisma,
} from "simple-icons";
import LogoLoop from "~/components/LogoLoop";

export const filesData = {
  "aboutme.txt": "Vazha adalah jawa jawa jawa jawa jawa jawa jawa jawa",
  "hobby.txt": "nigga jawa nigga jawa",
  "skills.txt": "Jawa jawa jawa",
  "fav_animal.txt": "Imma cat fucking lovers i love to fuck cats",
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
  ":: running early hook [archiso]",
  ":: Triggering uevents...",
  "[    0.000000] Linux version 6.x.x-arch1-1",
  "[    0.000000] Command line: initrd=/initramfs-linux.img",
  "[    1.234567] random: crng init done",
  ":: mounting '/dev/disk/by-label/ARCH_2026' to '/run/archiso/bootmnt'",
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
  ":: Starting Arch Linux installation environment",
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
