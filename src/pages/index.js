import Layout from "../layout/Layout";
import BuyersTable from "../screens/BuyersTable";
import SearchBlock from "../screens/SearchBlock";
import Tab from "../screens/Tab";
import DummyData from "../dummydata/MOCK_DATA.json";
import usePaginate from "../components/hooks/usePaginate";
import { useState } from "react";
import useSort from "../components/hooks/useSort";
import useDebounce from "../components/hooks/useDebounce";
import { searchFilter } from "../components/helper/searchFilter";

const Buyerlist = () => {
  const [currentTab, setCurrentTab] = useState({
    index: 0,
    tab: "All Orders",
    filters: [""],
  });

  const getAcceptedCount = DummyData.filter(
    (item) => item.status === "New"
  ).length;

  const [sortedData, setSortedData] = useState(DummyData);
  const [sorted, handleSort] = useSort(
    setSortedData,
    DummyData,
    "date_created"
  );

  //Filter Data based on the active tab
  const filteredData =
    currentTab.index === 0
      ? sortedData
      : sortedData.filter((val) => currentTab.filters.includes(val.status));

  // SEARCH VARIABLES
  const [search, setSearch] = useState("");
  const debSearchQuery = useDebounce(search);
  const filteredSearchData = searchFilter(filteredData, debSearchQuery);

  //Pagination
  const [currentItems, pageCount, handlePageClick, pageNumber] = usePaginate({
    data: filteredSearchData,
    count: 10,
  });

  return (
    <Layout>
      <Tab
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        badge={getAcceptedCount}
      />
      <SearchBlock
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        handleSort={handleSort}
        isSorted={sorted}
      />
      <BuyersTable
        data={DummyData}
        currentItems={currentItems}
        pageCount={pageCount}
        handlePageClick={handlePageClick}
        pageNumber={pageNumber}
        search={search}
      />
    </Layout>
  );
};

export default Buyerlist;
