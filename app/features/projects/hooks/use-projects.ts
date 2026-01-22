import { useQuery } from "@tanstack/react-query";
import type { Project, Task } from "@/index";
import { getProjects } from "../api/get-projects";

type ProjectWithTasks = Project & { tasks: Task[] };

export const useProjects = () => {
  return useQuery<ProjectWithTasks[]>({
    queryKey: ['projects'],
    queryFn: getProjects,
  });
}

