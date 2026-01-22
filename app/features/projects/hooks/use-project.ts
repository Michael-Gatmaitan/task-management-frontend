import { useQuery } from "@tanstack/react-query"
import type { Project } from "@/index"
import { getProject } from "../api/get-project"

export const useProject = (projectId: string) => {
  return useQuery<Project>({
    queryKey: ['projects', projectId],
    queryFn: () => getProject(projectId)
  })
}