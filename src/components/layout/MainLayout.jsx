import NotificationButton from "../UI/Button/NotificationButton";

const MainLayout = ({ children, isActive }) => {
  return (
    <div className="bg-[#F0F2F5] min-h-screen relative">
      {children[0]}
      <div className="pl-[16.75rem] pr-8 py-8">
        {!isActive ? (
          <div className="flex items-center justify-end w-full gap-4 px-4 py-2 bg-white border border-gray-200 shadow-sm rounded-2xl">
            <NotificationButton badge={1} />
            <div className="flex flex-col text-right">
              <h3 className="font-medium leading-4">John Doe</h3>
              <span className="text-xs">Sales Manager</span>
            </div>
            <div className="bg-gray-200 rounded-full w-11 h-11"></div>
          </div>
        ) : (
          <></>
        )}
        <div className="mt-8">{children[1]}</div>
      </div>
    </div>
  );
};
export default MainLayout;
