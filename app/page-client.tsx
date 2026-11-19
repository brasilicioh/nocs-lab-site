"use client";

import * as React from "react";
import {
  PlasmicHomepage,
  DefaultHomepageProps
} from "../components/plasmic/nocs_lab_site/PlasmicHomepage"; // plasmic-import: ipyk0ahIlWrs/render

export function ClientHomepage(props: DefaultHomepageProps) {
  return <PlasmicHomepage {...props} />;
}
