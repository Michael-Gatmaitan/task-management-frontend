"use client";

import Button from "@/components/Button";
import { ChangeEvent, FormEvent, useState } from "react";
import { useCreateProject } from "../projects/hooks/use-create-project";

const CreateNewProject = () => {
  const [showModal, setShowModal] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { mutate, isPending } = useCreateProject();

  const submitCreateProject = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({ title, description }, {
      onSuccess: () => {
        setTitle("");
        setDescription("");
        console.log("Create project success on frontend");
      }
    })
  }

  return (
    <>
      {showModal ? <div className="absolute top-[50%] left-[50%] translate-[-50%] p-4 bg-neutral-200 rounded-md w-full max-w-4/12">
        <form onSubmit={submitCreateProject} className="grid gap-2">
          <div className="grid gap-1">
            <label htmlFor="title" className="font-medium">Project title</label>
            <input value={title} className='bg-white text-black disabled:bg-red-400 p-2 rounded-sm' type='text' disabled={isPending} name="title" onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
          </div>
          <div className="grid gap-1">
            <label htmlFor="description" className="font-medium">Project description</label>
            <input value={description} className='bg-white text-black disabled:bg-red-400 p-2 rounded-sm' type='text' disabled={isPending} name="description" onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)} />
          </div>
          <div className="mt-2">
            <Button className="text-center items-center" type="submit" disabled={isPending}>{isPending ? "Creating..." : "Create project"}</Button>
          </div>
        </form>
      </div> : null}
      <Button onClick={() => setShowModal(!showModal)}>Create New Project</Button>
    </>
  )
}

export default CreateNewProject