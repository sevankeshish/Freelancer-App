import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[1fr_15rem]">
      <div className="bg-secondary-0 row-span-3 text-right">app siidebar </div>
      <div className="bg-secondary-0 py-4 row-start-1 text-right">
        app header
      </div>
      <div className="bg-secondary-100 p-8 overflow-y-auto text-right">
        <div className="mx-auto max-w-screen-md bg-red-300 flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
