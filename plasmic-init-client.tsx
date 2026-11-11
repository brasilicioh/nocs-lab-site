"use client";

import { PLASMIC } from "@/plasmic-init";
import { PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import type React from "react";

export function ClientPlasmicRootProvider(
  props: Omit<React.ComponentProps<typeof PlasmicRootProvider>, "loader">
) {
  return <PlasmicRootProvider loader={PLASMIC} {...props} />;
}
