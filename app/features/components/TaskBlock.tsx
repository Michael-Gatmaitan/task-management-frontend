"use client";
import { useTaskStore } from "@/app/stores/taskStore";
import type { Task } from "@/index";

const TaskBlock = ({ task }: { task: Task }) => {
  const { setShowTaskModal, setCurrentTask } = useTaskStore();

  return (
    <button type="button" className="w-full p-3 bg-neutral-100 rounded-md text-start" onClick={() => {
      // setCurrentTaskId(task.id);
      setCurrentTask(task);
      setShowTaskModal(true);
    }}>
      <div className="text-xl">
        {task.title}
      </div>
      <div className="text-sm">{task.description}</div>
      <div className="text-sm">{task.status}</div>
    </button>
  )
}

export default TaskBlock