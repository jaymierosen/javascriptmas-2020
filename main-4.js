function centuryFromYear(num) {
  let dec = num / 100;
  return Math.ceil(dec);
  // rounds up, so 19.05 becomes 20
  // rounds up, so 17.00 stays 17
}

centuryFromYear(1905);