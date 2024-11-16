import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom"

export default function ErrorPAge() {
  const error = useRouteError();
  // console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-800">
      <h1 className="mb-8 text-7xl text-slate-300">Oops!!!</h1>
      <p className="mb-4 text-4xl text-neutral-500">Page not found</p>
      <p className="mb-8 text-4xl sm:text-6xl font-semibold text-red-500">
        <i>{error.status || error.message}</i>
      </p>
      <Link to="/" className="text-3xl text-neutral-500 bg-slate-700 px-4 pt-1 pb-2 rounded-lg text-center hover:bg-slate-600">Back to Start</Link>
    </div>
  )
}