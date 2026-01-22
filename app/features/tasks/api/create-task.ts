import type { CreateTaskPayload } from "@/index";
import axios from "@/lib/axios";

export async function createTask(projectId: string, task: CreateTaskPayload) {
  const { data } = await axios.post(`/api/projects/${projectId}/tasks`, task);
  return data;
}