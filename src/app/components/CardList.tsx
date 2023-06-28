"use client";

import { ReactElement } from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/utilities";

export default function CardList(props: { resources: Project[] }) {
  const _toReturn: ReactElement[] = [];
  for (const [idx, res] of props.resources.entries()) {
    _toReturn.push(<ProjectCard project={res} key={idx} position={idx % 2 ? "right" : "left"} />);
  }

  return <div>{_toReturn}</div>;
}
