import { getProjectBySlug } from "@/data/projects";
import { ProjectDetailView } from "@/components/ProjectDetailView";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Shooting Simulator — Islam Valizada",
  description: "Hardware-integrated shooting simulation system combining OpenCV computer vision, physical laser sensors, and real-time ballistic physics in Unity.",
};

export default function ShootingPage() {
  const project = getProjectBySlug("shooting-simulator");
  if (!project) return notFound();

  return <ProjectDetailView project={project} />;
}
