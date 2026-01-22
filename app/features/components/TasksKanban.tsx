import type { Task } from '@/index'
import TaskBlock from './TaskBlock';

const TasksKanban = ({ tasks, tasksStatus }: { tasks: Task[]; tasksStatus: Task['status'] }) => {
  return (
    <div className='w-full h-full'>
      <div className="flex justify-start items-center gap-2">
        <div className="text-xl font-bold">
          {tasksStatus === "pending" ? "Pending" : tasksStatus === "in_progress" ? "In Progress" : "Completed"}
        </div>

        <span className="flex items-center justify-center w-[24px] h-[24px] rounded-full bg-brand-primary text-sm font-bold">
          {tasks.length}
        </span>
      </div>

      {/* Task blocks */}
      <div>
        {tasks.map(task => (
          <TaskBlock task={task} key={task.id} />
        ))}
      </div>

    </div>
  )
}

export default TasksKanban