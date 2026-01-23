"use client";
import type { FormEvent, Dispatch, SetStateAction, ChangeEvent } from 'react'
import ErrorMessage from './ErrorMessage';
import Button from '@/components/Button'


type ReactDispatchSetState<T> = Dispatch<SetStateAction<T>>;

interface ModalProps {
  showModal: boolean,
  setShowModal: ReactDispatchSetState<boolean>;
  title: string;
  setTitle: ReactDispatchSetState<string>;
  description: string;
  setDescription: ReactDispatchSetState<string>;
  submitCreateFunc: (e: FormEvent<HTMLFormElement>) => void
  isError: boolean;
  error: Error | null,
  isPending: boolean;
}

const ModalForCreate = ({ showModal, setShowModal, title, setTitle, description, setDescription, submitCreateFunc, isError, error, isPending }: ModalProps) => {
  const titleOnChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const descriptionOnChange = (e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value);
  const switchModalStateOnClick = () => setShowModal(!showModal);

  return (
    <>
      {showModal && <div className="absolute top-[50%] left-[50%] translate-[-50%] p-4 bg-neutral-200 rounded-md w-full max-w-4/12">
        <form onSubmit={submitCreateFunc} className="grid gap-2">
          <div className="grid gap-1">
            <label htmlFor="title" className="font-medium">Task title</label>
            <input value={title} className='bg-white text-black disabled:bg-red-400 p-2 rounded-sm' type='text' disabled={isPending} name="title" onChange={titleOnChange} />
          </div>
          <div className="grid gap-1">
            <label htmlFor="description" className="font-medium">Task description</label>
            <input value={description} className='bg-white text-black disabled:bg-red-400 p-2 rounded-sm' type='text' disabled={isPending} name="description" onChange={descriptionOnChange} />
          </div>

          {(isError && error) && <ErrorMessage error={error} />}

          <div className="mt-2 flex gap-2">
            <Button className="text-center items-center" type="submit" disabled={isPending}>{isPending ? "Creating..." : "Create Task"}</Button>
            <Button onClick={switchModalStateOnClick}>Close</Button>
          </div>
        </form>
      </div>}
      <Button type="submit" onClick={switchModalStateOnClick}>Create New Task</Button>
    </>
  )
}

export default ModalForCreate