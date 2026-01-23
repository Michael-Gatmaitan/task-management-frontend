"use client";

import { ListTodo } from 'lucide-react'
import Link from 'next/link';
import { useProjects } from '../../projects/hooks/use-projects';

const DisplayProjects = () => {
  const { data: projects, isLoading, isError, error } = useProjects();

  if (isLoading) return <div>Loading</div>
  if (isError) return <div>Error: {JSON.stringify(error)}</div>
  if (projects === undefined) return <div>Project is undefined</div>

  return (
    <div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map(project => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <div className="aspect-square border-2 bg-neutral-50 border-neutral-400 hover:bg-neutral-100 transition-all flex flex-col justify-between shadow hover:shadow-lg text-black font-semibold text-lg rounded-md">
              <div className="p-4">
                <div className="text-2xl text-white font-bold">{project.title}</div>
                <div className={`font-medium ${project.description ? "text-white opacity-100" : "text-gray-400"}`}>{project.description || "No description"}</div>
              </div>

              <div className="w-full p-4 border-t border-neutral-400 text-white font-normal text-sm flex items-center gap-2">
                <ListTodo size={18} />
                {project.tasks.length}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DisplayProjects