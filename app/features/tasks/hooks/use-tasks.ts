import { useQuery } from "@tanstack/react-query"
import type { Task } from "@/index";
import { getTasks } from "../api/get-tasks";

export const useTasks = (projectId: string) => {
  return useQuery<Task[]>({
    queryKey: ['projects', projectId, 'tasks'],
    queryFn: () => getTasks(projectId)
  });
}