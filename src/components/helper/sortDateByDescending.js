export const sortDatesDescending = (arr, key) => {
  return [...arr].sort((a, b) => {
    const dateA = new Date(a[key]);
    const dateB = new Date(b[key]);
    return dateA > dateB ? 1 : -1;
  });
};
