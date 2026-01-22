import { useQuery } from "@tanstack/react-query"
import { getTasks } from "../api/get-tasks";
import { Task } from "@/index";

export const useTasks = (projectId: string) => {
  return useQuery<Task[]>({
    queryKey: ['projects', projectId, 'tasks'],
    queryFn: () => getTasks(projectId)
  });
}