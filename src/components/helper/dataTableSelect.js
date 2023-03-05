export const handleSelectData = (data, setSelectedRows) => {
  setSelectedRows((prevSelectedRows) => {
    if (prevSelectedRows.includes(data)) {
      return prevSelectedRows.filter((r) => r !== data);
    } else {
      return [...prevSelectedRows, data];
    }
  });
};

export const handleSelectAll = (data, setSelectedRows) => {
  setSelectedRows((prevSelectedRows) => {
    if (prevSelectedRows.length === data.length) {
      return [];
    } else {
      return data;
    }
  });
};
