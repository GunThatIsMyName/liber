export const getTotalNumber = (data) => {
  if (data.length < 1) {
    return '0';
  }
  const totalNumber = data.reduce((item, curr) => item + curr);
  return totalNumber;
};
