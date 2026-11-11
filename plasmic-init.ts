import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional";
import * as NextNavigation from "next/navigation";

const projectId = process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID;
const projectToken = process.env.NEXT_PUBLIC_PLASMIC_PROJECT_TOKEN;

export const isPlasmicConfigured = Boolean(projectId && projectToken);

export const PLASMIC = initPlasmicLoader({
  nextNavigation: NextNavigation,
  projects: isPlasmicConfigured
    ? [{ id: projectId!, token: projectToken! }]
    : [],
  preview: process.env.NODE_ENV !== "production"
});
