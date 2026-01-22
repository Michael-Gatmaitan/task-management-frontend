import axios from "@/lib/axios";

export async function deleteTask(taskId: string) {
  const { data } = await axios.delete(`/api/tasks/${taskId}`);
  return data;
}