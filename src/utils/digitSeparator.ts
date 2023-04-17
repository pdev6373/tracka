export const digitSeparator = (digit: number) => {
  if (!digit) return "00.00";
  const digitToString = digit.toString().split(".");
  digitToString[0] = digitToString[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return digitToString.join(".");
};
