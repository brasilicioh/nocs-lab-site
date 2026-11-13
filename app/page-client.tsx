"use client";

import * as React from "react";
import {
  PlasmicHomepage,
  DefaultHomepageProps
} from "../components/plasmic/imported_project/PlasmicHomepage"; // plasmic-import: kAGwtq5UTh8F/render

export function ClientHomepage(props: DefaultHomepageProps) {
  return <PlasmicHomepage {...props} />;
}
