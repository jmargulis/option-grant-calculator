export const isPositiveInteger = (x) => {
  const n = Math.floor(Number(x));
  return n !== Infinity && String(n) === x && n > 0;
}

export const isNonNegativeNumber = (x) => {
  const n = Number(x);
  return n >= 0;
}

export const printNumberWithCommas = (x) => {
  return Math.floor(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (x - Math.floor(x)).toFixed(2).substring(1);
}
