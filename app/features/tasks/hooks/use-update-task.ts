import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Task } from "@/index";
import { updateTask } from "../api/update-task";

export const useUpdatetask = (projectId: string, taskId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (updatedTask: Task) => updateTask(taskId, updatedTask),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects", projectId, "tasks"],
      });
    },
  });
};
