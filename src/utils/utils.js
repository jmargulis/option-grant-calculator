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

const isGrantValid = (grant) => {
  if((typeof grant === 'object') &&
    grant.sharesGranted &&
    isPositiveInteger(grant.sharesGranted) &&
    grant.totalShares &&
    isPositiveInteger(grant.totalShares) &&
    grant.strikePrice &&
    isNonNegativeNumber(grant.strikePrice) &&
    grant.strikeDate &&
    (typeof grant.strikeDate.getMonth === 'function')) {

    return true;
  }
  return false;
}

// determine if array of grants is valid (complete)
export const isGrantsValid = (grants) => {
  if(grants.length === 0) {
    return false;
  }

  console.log(typeof grants);
  console.log(grants);
  let result = true;
  grants.map(grant => {
    result = result && isGrantValid(grant);
  });

  return result;
}
