"use client";
// biome-ignore assist/source/organizeImports: <...>
import CreateNewTask from '@/app/features/components/tasks/CreateNewTask';
import { useProject } from '@/app/features/projects/hooks/use-project';
import { formatDate } from '@/lib/date_formatter';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const ProjectHeader = ({ projectId }: { projectId: string }) => {
  const { data: project, isLoading, isError, error } = useProject(projectId);

  if (isLoading) return <div>Project loading...</div>
  if (isError) return <div>Error: {JSON.stringify(error)}</div>
  if (!project) return <div>Project not found</div>

  const formattedDate = formatDate(project.created_at);

  return (
    <div className="flex justify-between mb-4">
      <div className="flex gap-2 items-center justify-center">
        <Link href="/projects">
          <button type="button" className="p-2 rounded-sm bg-gray-900 hover:bg-gray-800 transition">
            <ChevronLeft />
          </button>
        </Link>

        <div className="space-y-2">
          <div className="text-3xl font-bold">
            {project.title}
          </div>
          {project.description && <div className="text-xl">{project.description}</div>}
        </div>

        <div className="font-bold text-sm">{formattedDate}</div>
      </div>

      <CreateNewTask projectId={projectId} />
    </div>
  )
}

export default ProjectHeader