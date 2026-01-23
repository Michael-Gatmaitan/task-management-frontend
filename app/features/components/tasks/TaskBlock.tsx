"use client";
import { useTaskStore } from "@/app/stores/taskStore";
import type { Task } from "@/index";

const TaskBlock = ({ task }: { task: Task }) => {
  const { setShowTaskModal, setCurrentTask } = useTaskStore();

  const { status } = task;
  const taskBackground =
    status === "pending" ? "bg-neutral-100"
      : status === "in_progress" ? "bg-yellow-600"
        : "bg-brand-600";

  return (
    <button type="button" className={`space-y-2 w-full p-3 ${taskBackground} rounded-md text-start`} onClick={() => {
      // setCurrentTaskId(task.id);
      setCurrentTask(task);
      setShowTaskModal(true);
    }}>
      <div className="text-xl font-bold">
        {task.title}
      </div>
      <div className="opacity-80">{task.description}</div>
    </button>
  )
}

export default TaskBlock