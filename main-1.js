function candies(children, candy) {
  return Math.floor(children % candy * children); // 3 * 3
  // each child will have 3 candies each
}

candies(9, 3);