import CreateNewProject from '@/app/features/components/projects/CreateNewProject';
import DisplayProjects from '@/app/features/components/projects/DisplayProjects';

const page = () => {
  return (
    <div className="grid gap-6">
      <div className="w-full flex justify-between items-center">
        <div className="text-3xl font-bold">Your Projects</div>
        <CreateNewProject />
      </div>

      <DisplayProjects />

    </div>
  )
}

export default page;