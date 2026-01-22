"use client";
import { useTaskStore } from '@/app/stores/taskStore'
import Button from '@/components/Button';
import { useUpdatetask } from '../tasks/hooks/use-update-task';
import { Task } from '@/index';

const TaskModal = ({ projectId }: { projectId: string }) => {

  const { showTaskModal, setShowTaskModal, setCurrentTask, task } = useTaskStore();

  // Ensure 'task' is not null before accessing 'task.id'.
  const { mutate, isPending } = useUpdatetask(projectId, task?.id ?? '');

  return (
    <>
      {showTaskModal ? (
        <div className="w-full h-full p-[120px] absolute top-0 left-0 bg-black/40 flex items-center justify-center">
          <Button onClick={() => {
            setShowTaskModal(false);
            setCurrentTask(null);
          }} className="absolute top-[20px] right-[20px]">Close</Button>

          {task !== null ? (
            <div className="w-full bg-red-500 p-4">
              <div>Task title: {task.title}</div>
              <div>Task description: {task.description}</div>

              {isPending ? <div>Updating status...</div> : null}

              <div className="mt-4">
                <label htmlFor="task-status" className="block mb-2 text-sm font-medium">
                  Status:
                </label>
                <select
                  id="task-status"
                  defaultValue={task.status}
                  className="block w-full p-2 border rounded"
                  onChange={(e) => {
                    console.log(e.target.value);
                    const val = e.target.value as Task['status'];

                    const updatedTask: Task = {
                      ...task,
                      status: val
                    };

                    mutate(updatedTask, {
                      onSuccess: () => {
                        console.log("Task updated successfully");
                      }
                    })

                    console.log(updatedTask);

                  }}
                >
                  <option value="pending">Pending</option>
                  <option value="in_progress">In progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  )
}

export default TaskModal