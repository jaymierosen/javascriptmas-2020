function depositProfit(deposit, rate, threshold) {
  let year = 0;
  let currentAccountValue = deposit;

  // we don't know how many years, so use a while loop
  // we do a loop to surpass the threshold
  // increase the year by 1
  // multiply the currentAccountValue by 20%
  while(threshold > currentAccountValue) {
      currentAccountValue += currentAccountValue *(rate / 100);
      year++;
  }
  
  return year;
}

depositProfit(100, 20, 500);