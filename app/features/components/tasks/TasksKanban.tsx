import type { Task } from '@/index'
import TaskBlock from './TaskBlock';

const TasksKanban = ({ tasks, tasksStatus }: { tasks: Task[]; tasksStatus: Task['status'] }) => {
  return (
    <div className='w-full p-4 rounded-lg bg-neutral-50 h-min'>
      <div className="flex justify-start items-center gap-2 mb-3">
        <div className="text-2xl font-bold">
          {tasksStatus === "pending" ? "Pending" : tasksStatus === "in_progress" ? "In Progress" : "Completed"}
        </div>

        <span className="flex items-center justify-center w-[24px] h-[24px] rounded-full bg-brand-primary text-sm font-bold">
          {tasks.length}
        </span>
      </div>

      {/* Task blocks */}
      <div className="grid gap-4">
        {tasks.length === 0 ? (
          <div className="font-medium opacity-60">No tasks in this board.</div>
        ) : tasks.map(task => (
          <TaskBlock task={task} key={task.id} />
        ))}
      </div>
    </div>
  )
}

export default TasksKanban