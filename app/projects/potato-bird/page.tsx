import { getProjectBySlug } from "@/data/projects";
import { ProjectDetailView } from "@/components/ProjectDetailView";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Potato Bird — Islam Valizada",
  description: "A snappy, juice-packed 2D arcade platformer built in Unity featuring procedural spring-damper deformation and input-buffered controls.",
};

export default function PotatoBirdPage() {
  const project = getProjectBySlug("potato-bird");
  if (!project) return notFound();

  return <ProjectDetailView project={project} />;
}
