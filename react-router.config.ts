import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";

export default {
  // Config options...
  ssr: true,
  presets: [vercelPreset()],
} satisfies Config;
