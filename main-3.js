function chunkyMonkey(values, size) {
  //  write code here.
  // const newArr = [];
  const newArr = new Array();
  while(values.length) {
      newArr.push(values.splice(0,size));
  }
​
  // let newArr = values.map((val) => {
  //     val.splice(0, size)
  // });
  return newArr;
}
​
​chunkyMonkey([1, 2, 3, 4], 2);