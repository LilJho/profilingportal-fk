import SearchField from "../components/UI/SearchField";
import Button from "../components/UI/Button/Button";
import { MdOutlineFilterAlt } from "react-icons/md";

const SearchBlock = ({ onChange, value, handleSort, isSorted }) => {
  return (
    <div className="flex gap-4">
      <div className="bg-white border rounded-md">
        <SearchField
          placeholder="Search Buyer..."
          value={value}
          onChange={onChange}
        />
      </div>

      <Button
        icon={<MdOutlineFilterAlt />}
        variant={`${isSorted ? "default" : "subtle"}`}
        color={`${isSorted ? "blue" : "gray"}`}
        onClick={handleSort}
      >
        Filter Date by descending
      </Button>
    </div>
  );
};

export default SearchBlock;
