"use client";
// biome-ignore assist/source/organizeImports: <unnecessary import warning>
import type { Task } from '@/index';
import Button from '@/components/Button';
import { type FormEvent, useEffect } from 'react';
import { useUpdatetask } from '../tasks/hooks/use-update-task';
import { useTaskStore } from '@/app/stores/taskStore'
import { LoaderCircle } from 'lucide-react';
import ErrorMessage from './ErrorMessage';
import { useDeleteTask } from '../tasks/hooks/use-delete-tasks';

const TaskModal = ({ projectId }: { projectId: string }) => {

  const { showTaskModal, setShowTaskModal, setCurrentTask, task } = useTaskStore();

  // Ensure 'task' is not null before accessing 'task.id'.
  const { mutate: updateTaskMutate, isPending, isError, error } = useUpdatetask(projectId, task?.id ?? '');
  const { mutate: deleteTaskMutate } = useDeleteTask(projectId);

  useEffect(() => {
    if (!isPending && !isError) {
      setShowTaskModal(false);
    }
  }, [isError, isPending, setShowTaskModal]);

  const deleteTask = () => {
    if (task === null) return;

    deleteTaskMutate(task?.id, {
      onSuccess: () => {
        console.log("Task deleted successfully");
        setShowTaskModal(false);
      }
    })
  }

  const onEditSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const status = formData.get("status") as Task['status'];

    if (task !== null) {

      // No updates but buton clicked
      if (title === task.title && description === task.description && status === task.status) {
        setShowTaskModal(false);
        console.log("Nothing to be updated");
        return;
      }

      const updatedTask = {
        ...task,
        title,
        description,
        status
      };

      updateTaskMutate(updatedTask, {
        onSuccess: () => {
          console.log("Task updated successfully");
        }
      })
    }
  }

  return (
    <>
      {showTaskModal ? (
        <form className="w-full h-full p-[120px] absolute top-0 left-0 bg-black/40 flex items-center justify-center" onSubmit={onEditSubmit}>
          <Button onClick={() => {
            setShowTaskModal(false);
            setCurrentTask(null);
          }} className="absolute top-[20px] right-[20px]">Close</Button>

          {task !== null ? (
            <div className="w-full bg-neutral-200 p-4 rounded-md max-w-4/12">
              <input type="box" name="title" className="text-2xl font-bold" defaultValue={task.title} />
              <textarea name="description" className="opacity-80 field-sizing-content resize-none w-full" defaultValue={task.description || ''} />

              {isPending && (
                <div className="flex gap-1">
                  <LoaderCircle className="animate-spin" />
                  <div>Updating status...</div>
                </div>
              )}

              {isError && (
                <ErrorMessage error={error} />
              )}

              <div className="mt-4">
                <label htmlFor="task-status" className="block mb-2 text-sm font-medium">
                  Status:
                </label>
                <select
                  id="task-status"
                  name="status"
                  defaultValue={task.status}
                  className="block w-full p-2 border rounded"
                >
                  <option className='bg-neutral-50' value="pending">Pending</option>
                  <option className='bg-neutral-50' value="in_progress">In progress</option>
                  <option className='bg-neutral-50' value="completed">Completed</option>
                </select>
                <div className="flex justify-between mt-2">
                  <div className="space-x-2">
                    <Button type="submit">Update</Button>
                    <Button onClick={() => setShowTaskModal(false)}>Close</Button>
                  </div>


                  <Button type="button" className="bg-error-700 hover:bg-error-600" onClick={deleteTask}>Delete task</Button>
                </div>
              </div>
            </div>
          ) : null}
        </form>
      ) : null}
    </>
  )
}

export default TaskModal