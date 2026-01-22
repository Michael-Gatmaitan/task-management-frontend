"use client";
import { useProject } from '@/app/features/projects/hooks/use-project';

const ShowProject = ({ projectId }: { projectId: string }) => {
  const { data: project, isLoading, isError, error } = useProject(projectId);

  if (isLoading) return <div>Project loading...</div>
  if (isError) return <div>Error: {JSON.stringify(error)}</div>
  if (!project) return <div>Project not found</div>
  return (
    <div>
      Project title: {project.title}
    </div>
  )
}

export default ShowProject