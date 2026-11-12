import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional";

const projectId = process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID;
const projectToken = process.env.NEXT_PUBLIC_PLASMIC_PROJECT_TOKEN;
const plasmicHost = process.env.NEXT_PUBLIC_PLASMIC_HOST;

export const isPlasmicConfigured = Boolean(projectId && projectToken);

export const PLASMIC = initPlasmicLoader({
  ...(plasmicHost ? { host: plasmicHost } : {}),
  projects: isPlasmicConfigured
    ? [{ id: projectId!, token: projectToken! }]
    : [],
  preview: process.env.NODE_ENV !== "production"
});
