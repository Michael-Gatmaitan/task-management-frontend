"use client";

import { type FormEvent, useState } from "react";
import { useCreateTask } from "../../tasks/hooks/use-create-task";
import ModalForCreate from "../ModalForCreate";

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
    <ModalForCreate
      showModal={showModal}
      setShowModal={setShowModal}
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      submitCreateFunc={submitCreateTask}
      isError={isError}
      error={error}
      isPending={isPending}
    />
  )
}

export default CreateNewTask