"use client";

import { type FormEvent, useState } from "react";
import { useCreateProject } from "../../projects/hooks/use-create-project";
import ModalForCreate from "../ModalForCreate";

const CreateNewProject = () => {
  const [showModal, setShowModal] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { mutate, isPending, isError, error } = useCreateProject();

  const submitCreateProject = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({ title, description }, {
      onSuccess: () => {
        setTitle("");
        setDescription("");
        console.log("Create project success on frontend");
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
      submitCreateFunc={submitCreateProject}
      isError={isError}
      error={error}
      isPending={isPending}
    />
  )
}

export default CreateNewProject