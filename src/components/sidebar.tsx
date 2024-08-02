import { SidebarList } from "./sidebar-list";

export const Sidebar = () => {
  return (
    <div className="h-full w-full max-w-72 bg-white text-gray-500 py-2 z-10 hidden md:block">
      <div className="flex flex-col ">
        <SidebarList />
      </div>
    </div>
  );
};
