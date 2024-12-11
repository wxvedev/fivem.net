import type { Language } from "@/types/language";

export const languages: Language[] = [
  {
    name: "LUA",
    logo: "/languages/lua.webp",
    description:
      "A concise and lightweight dynamically typed language, easy to pick up.",
    url: "https://docs.fivem.net/scripting-manual/runtimes/lua",
  },
  {
    name: "C#",
    description:
      "Static typing and object orientation, for the most advanced projects.",
    logo: "/languages/csharp.webp",
    url: "https://docs.fivem.net/docs/scripting-manual/runtimes/csharp/",
  },
  {
    name: "JavaScript",
    description:
      "Use your existing web development knowledge and the rich package/tooling ecosystem.",
    logo: "/languages/javascript.webp",
    url: "https://docs.fivem.net/docs/scripting-manual/runtimes/javascript/",
  },
];
