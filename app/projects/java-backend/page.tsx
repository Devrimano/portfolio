import { getProjectBySlug } from "@/data/projects";
import { ProjectDetailView } from "@/components/ProjectDetailView";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Java Backend & Systems — Islam Valizada",
  description: "High-concurrency data persistence engine and socket networking architecture built with Java, JDBC, and PostgreSQL.",
};

export default function JavaBackendPage() {
  const project = getProjectBySlug("java-backend");
  if (!project) return notFound();

  return <ProjectDetailView project={project} />;
}
