"use client";

import * as React from "react";
import {
  PlasmicBlankComponents,
  DefaultBlankComponentsProps
} from "../../components/plasmic/nocs_lab_site/PlasmicBlankComponents"; // plasmic-import: hyNFprDIanWK/render

export function ClientBlankComponents(props: DefaultBlankComponentsProps) {
  return <PlasmicBlankComponents {...props} />;
}
