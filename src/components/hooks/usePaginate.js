import { useEffect, useState } from "react";

// interface IProps<T> {
//   data: T[] | any;
//   count?: number;
// }

const usePaginate = ({ data = [], count = 10 }) => {
  const dataLength = data?.length;
  const [pageNumber, setPageNumber] = useState(0);
  const itemPerPage = count;
  const pageVisited = pageNumber * itemPerPage;
  const displayItems = data?.slice(pageVisited, pageVisited + itemPerPage);
  const [pageCount, setPageCount] = useState(0);
  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    setPageNumber(0);
    setPageCount(0);
  }, [dataLength]);

  useEffect(() => {
    setPageCount(Math.ceil(dataLength / itemPerPage));
  }, [pageVisited, itemPerPage, dataLength]);

  return [displayItems, pageCount, handlePageClick, pageNumber, dataLength];
};

export default usePaginate;
