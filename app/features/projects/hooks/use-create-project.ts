import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateProjectPayload } from "@/index";
import { createProject } from "../api/create-project";

export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newProject: CreateProjectPayload) => createProject(newProject),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    }
  })
}
