import DisplayTaskBoards from '@/app/features/components/tasks/DisplayTasks';
import TaskModal from '@/app/features/components/tasks/TaskModal';
import ProjectHeader from '../../../features/components/projects/ProjectHeader';

const page = async ({ params }: { params: Promise<{ projectId: string }> }) => {
  const { projectId } = await params;

  return (
    <div>
      <ProjectHeader projectId={projectId} />
      <DisplayTaskBoards projectId={projectId} />
      <TaskModal projectId={projectId} />
    </div>
  )
}

export default page