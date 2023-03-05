import UnstyledButton from "../components/UI/Button/UnstyledButton";

const Tab = ({ currentTab, setCurrentTab, badge }) => {
  return (
    <div className="flex gap-4 mb-2 text-lg text-gray-400">
      <UnstyledButton
        className={currentTab.index === 0 ? "font-medium text-black" : ""}
        onClick={() =>
          setCurrentTab({ index: 0, tab: "All Buyers", filters: [""] })
        }
      >
        All Buyers
      </UnstyledButton>
      <div className="relative">
        <UnstyledButton
          className={currentTab.index === 1 ? "font-medium text-black" : ""}
          onClick={() =>
            setCurrentTab({
              index: 1,
              tab: "Newly Added",
              filters: ["New"],
            })
          }
        >
          Newly Added
        </UnstyledButton>
        {badge > 0 && (
          <h4 className="absolute top-1 -right-2 bg-warning rounded-full text-white min-w-[15px]  p-1 h-4 text-xs flex justify-center items-center animate-pulse">
            {badge}
          </h4>
        )}
      </div>

      <UnstyledButton
        className={currentTab.index === 2 ? "font-medium text-black" : ""}
        onClick={() =>
          setCurrentTab({
            index: 2,
            tab: "Updated Buyers",
            filters: ["Updated"],
          })
        }
      >
        Updated Buyers
      </UnstyledButton>
    </div>
  );
};

export default Tab;
