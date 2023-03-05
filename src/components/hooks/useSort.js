import { useCallback, useState } from "react";
import { sortDatesDescending } from "../../components/helper/sortDateByDescending";

const useSort = (setSortedData, data, prop) => {
  const [sorted, setSorted] = useState(false);
  const handleSort = () => {
    if (sorted) {
      setSortedData(data);
      setSorted(false);
    } else {
      setSortedData(sortDatesDescending(data, prop));
      setSorted(true);
    }
  };

  return [sorted, handleSort];
};

export default useSort;
