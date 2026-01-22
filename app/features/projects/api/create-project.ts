import type { CreateProjectPayload } from "@/index";
import axios from "@/lib/axios";

export async function createProject(project: CreateProjectPayload) {
  const { data } = await axios.post('/api/projects', project);
  return data;
}