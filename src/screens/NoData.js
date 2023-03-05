import React from "react";

const NoData = ({ tableData, search }) => {
  return (
    <>
      {tableData?.length === 0 && search === "" ? (
        <div className="w-1/2 py-10 mx-auto text-xl text-center">NO DATA</div>
      ) : (
        tableData?.length === 0 &&
        search && (
          <div className="w-1/2 py-10 mx-auto text-xl text-center">
            {`"${search}"`} not found
          </div>
        )
      )}
    </>
  );
};

export default NoData;
