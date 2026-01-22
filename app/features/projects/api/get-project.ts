import { Project } from "@/index";
import axios from "@/lib/axios";

export async function getProject(projectId: string): Promise<Project> {
  const { data } = await axios.get(`/api/projects/${projectId}`);
  return data;
}