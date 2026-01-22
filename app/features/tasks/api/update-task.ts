import type { Task } from "@/index";
import axios from "@/lib/axios";

export async function updateTask(taskId: string, updatedTask: Task) {

  console.log(`In axios function: ${updatedTask.status}`);
  const { data } = await axios.patch(`/api/tasks/${taskId}`, updatedTask);
  console.log(`In axios ${data.message}`);
  return data;
}