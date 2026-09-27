import { getProjectBySlug } from "@/data/projects";
import { ProjectDetailView } from "@/components/ProjectDetailView";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Milkman Simulator — Islam Valizada",
  description: "A realistic first-person physical simulation game built in Unity with custom kinematic character controller and dynamic crate momentum physics.",
};

export default function MilkmanPage() {
  const project = getProjectBySlug("milkman-simulator");
  if (!project) return notFound();

  return <ProjectDetailView project={project} />;
}
