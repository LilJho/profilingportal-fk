import Link from "next/link";
import Table, {
  TableColumn,
  TableHead,
  TableRow,
} from "../components/UI/Table";

import { RiPlayList2Fill } from "react-icons/ri";
import Pagination from "../components/UI/Pagination";
import NoData from "../screens/NoData";

const BuyersTable = ({
  currentItems,
  pageCount,
  handlePageClick,
  pageNumber,
  search,
}) => {
  return (
    <div className="p-4 my-4 bg-white rounded-lg">
      <Table
        header={
          <>
            <TableHead>Buyer ID</TableHead>
            <TableHead>Fullname</TableHead>
            <TableHead>Birthdate</TableHead>
            <TableHead>Contact No.</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </>
        }
      >
        {currentItems.map((buyer, index) => (
          <TableRow key={index}>
            <TableColumn>{buyer.id}</TableColumn>
            <TableColumn>{buyer.full_name}</TableColumn>
            <TableColumn className="w-10 truncate">
              {buyer.birthdate}
            </TableColumn>
            <TableColumn>{buyer.contact_no}</TableColumn>
            <TableColumn>{buyer.address}</TableColumn>
            <TableColumn>{buyer.email}</TableColumn>
            <TableColumn>{buyer.status}</TableColumn>
            <TableColumn>
              <Link href={`/${buyer.id}?buyer=${JSON.stringify(buyer)}`}>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary-100/70 text-secondary">
                  <RiPlayList2Fill />
                </div>
              </Link>
            </TableColumn>
          </TableRow>
        ))}
      </Table>

      {/*No Data and search not found  */}
      <NoData tableData={currentItems} search={search} />

      {/* PAGENATION */}
      <div className="flex py-4 mx-auto mt-2 w-max">
        {currentItems?.length !== 0 && (
          <Pagination
            pageCount={pageCount}
            currentCount={pageNumber}
            pageNumber={pageNumber}
            handlePageClick={handlePageClick}
            forcePage={pageNumber}
            className="justify-center mt-6"
          />
        )}
      </div>
    </div>
  );
};

export default BuyersTable;
