import { getLaravelErrorMessage } from '@/lib/error-utils'

const ErrorMessage = ({ error }: { error: Error }) => {
  return (
    <div className="text-error-700 font-bold">
      {getLaravelErrorMessage(error)}
    </div>
  )
}

export default ErrorMessage