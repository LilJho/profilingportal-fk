export const searchFilter = (rows = [], debValue = "") => {
  const columns = Object.keys(Object(rows[0]) || []);

  return rows?.filter((row) =>
    columns.some(
      (column) =>
        row[column]
          ?.toString()
          .toLowerCase()
          .indexOf(debValue.toString().toLowerCase()) > -1
    )
  );
};
