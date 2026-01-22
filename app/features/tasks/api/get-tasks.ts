import axios from "@/lib/axios";

export async function getTasks(projectId: string) {
  const { data } = await axios.get(`/api/projects/${projectId}/tasks`);
  return data;
}