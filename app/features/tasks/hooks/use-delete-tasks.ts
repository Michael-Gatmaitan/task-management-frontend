import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteTask } from "../api/delete-task"

export const useDeleteTask = (projectId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (taskId: string) => deleteTask(taskId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects', projectId, 'tasks']})
    }
  })
}