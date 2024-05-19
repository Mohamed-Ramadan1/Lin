import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-9xl font-bold">404</h1>
          <h2 className="text-3xl font-semibold">Page not found</h2>
          <Link to="/" className="text-blue-500">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-9xl font-bold">{error.status}</h1>
        <h2 className="text-3xl font-semibold">Something went wrong</h2>
        <Link to="/" className="text-blue-500">
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default Error;
