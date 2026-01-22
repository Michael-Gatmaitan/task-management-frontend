import DisplayTasks from '@/app/features/components/DisplayTasks';
import TaskModal from '@/app/features/components/TaskModal';
import ShowProject from './ShowProject';

const page = async ({ params }: { params: Promise<{ projectId: string }> }) => {
  const { projectId } = await params;

  return (
    <div>
      <ShowProject projectId={projectId} />
      <DisplayTasks projectId={projectId} />
      <TaskModal projectId={projectId} />
    </div>
  )
}

export default page