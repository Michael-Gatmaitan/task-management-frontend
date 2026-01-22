"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import Button from "@/components/Button";
import { useCreateTask } from "../tasks/hooks/use-create-task";
import ErrorMessage from "./ErrorMessage";

const CreateNewTask = ({ projectId }: { projectId: string }) => {
  const [showModal, setShowModal] = useState(false);

  const { mutate, isPending, isError, error } = useCreateTask(projectId);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitCreateTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({ title, description }, {
      onSuccess: () => {
        setTitle("");
        setDescription("");
        console.log("Create task success on frontend");
        setShowModal(false);
      }
    })
  }

  return (
    <>
      {showModal ? <div className="absolute top-[50%] left-[50%] translate-[-50%] p-4 bg-neutral-200 rounded-md w-full max-w-4/12">
        <form onSubmit={submitCreateTask} className="grid gap-2">
          <div className="grid gap-1">
            <label htmlFor="title" className="font-medium">Task title</label>
            <input value={title} className='bg-white text-black disabled:bg-red-400 p-2 rounded-sm' type='text' disabled={isPending} name="title" onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
          </div>
          <div className="grid gap-1">
            <label htmlFor="description" className="font-medium">Task description</label>
            <input value={description} className='bg-white text-black disabled:bg-red-400 p-2 rounded-sm' type='text' disabled={isPending} name="description" onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)} />
          </div>

          {isError && <ErrorMessage error={error} />}

          <div className="mt-2 flex gap-2">
            <Button className="text-center items-center" type="submit" disabled={isPending}>{isPending ? "Creating..." : "Create Task"}</Button>
            <Button onClick={() => setShowModal(!showModal)}>Close</Button>
          </div>
        </form>
      </div> : null}
      <Button type="submit" onClick={() => setShowModal(!showModal)}>Create New Task</Button>
    </>
  )
}

export default CreateNewTask