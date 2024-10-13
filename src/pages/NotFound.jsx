import { HiArrowLeft } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveback";

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="h-screen bg-secondary-0">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-10">
          <div>
            <h1 className="text-xl font-bold text-secondary-700 mb-8 flex justify-center ">
              Oops! The page you’re looking for doesn’t exist.
            </h1>
            <button onClick={moveBack} className="flex items-center gap--2">
              <HiArrowLeft className="w-6 h-6 text-primary-900" />
              <span>Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
