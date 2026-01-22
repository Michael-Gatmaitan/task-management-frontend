"use client";
import { useTasks } from '../tasks/hooks/use-tasks'
import TasksKanban from './TasksKanban';

const DisplayTaskBoards = ({ projectId }: { projectId: string }) => {
  const { data: tasks, isLoading, isError, error } = useTasks(projectId);

  if (isLoading) return <div>Getting tasks</div>
  if (isError) return <div>Error: {JSON.stringify(error)}</div>
  if (!tasks) return <div>Tasks not found</div>

  const tasksPending = tasks.filter(task => task.status === "pending");
  const tasksInProgress = tasks.filter(task => task.status === "in_progress");
  const tasksCompleted = tasks.filter(task => task.status === "completed");

  return (
    <div className="w-full grid grid-cols-3 gap-4 h-12">
      <TasksKanban tasks={tasksPending} tasksStatus='pending' />
      <TasksKanban tasks={tasksInProgress} tasksStatus='in_progress' />
      <TasksKanban tasks={tasksCompleted} tasksStatus='completed' />
    </div>
  )
}

export default DisplayTaskBoards