import CloudDownloadIcon from "@/assets/icons/features/CloudDownload.astro";
import UserGroupIcon from "@/assets/icons/features/UserGroup.astro";
import SyncAltIcon from "@/assets/icons/features/SyncAlt.astro";
import WidgetsIcon from "@/assets/icons/features/Widgets.astro";

import type { Feature } from "@/types/feature";

export const homeFeatures: Feature[] = [
  {
    title: "Streaming",
    description:
      "Transform your server with custom vehicles, maps, weapons, and more, all loaded seamlessly in real-time.",
    icon: CloudDownloadIcon,
    color: "aqua",
  },
  {
    title: "AI",
    description:
      "Enjoy immersive gameplay with native AI functionality. Engage in PvE combat or roam with NPC companions.",
    icon: UserGroupIcon,
    color: "blue",
  },
  {
    title: "Sync",
    description:
      "Experience smooth multiplayer interactions with improved network code built on Rockstar's original technology.",
    icon: SyncAltIcon,
    color: "yellow",
  },
  {
    title: "Standalone",
    description:
      "Switch effortlessly between GTA Online and FiveM without altering your GTA V installation or risking a ban.",
    icon: WidgetsIcon,
    color: "red",
  },
];

export const hostingFeatures: Feature[] = [
  {
    title: "Using our advanced OneSync framework, up to 2048 people can join your server at any given time!",
    icon: UserGroupIcon,
    color: "aqua",
  },
  {
    title: "Create a unique environment with our support for AI, custom cars, objects, maps, weapons, and more.",
    icon: CloudDownloadIcon,
    color: "blue",
  },
  {
    title: "With over 5200 functions at your disposal, anything is possible. Your imagination is the limit.",
    icon: WidgetsIcon,
    color: "yellow",
  },
  {
    title: "FiveM uses Rockstar's network code with significant improvements, so you'll have the best sync around.",
    icon: SyncAltIcon,
    color: "red",
  },
];