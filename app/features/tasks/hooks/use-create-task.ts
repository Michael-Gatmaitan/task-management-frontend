import { CreateTaskPayload } from "@/index"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createTask } from "../api/create-task"

export const useCreateTask = (projectId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newTask: CreateTaskPayload) => createTask(projectId, newTask),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects', projectId, 'tasks']})
    }
  })
}