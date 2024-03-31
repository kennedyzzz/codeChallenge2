function generateArray(start, end) {
    const arr = []; // arr is used to create an empty array
    for (let i = start; i <= end; i++) { //for loop is used to iterate from start to end and push the current value of i into the arr array
      arr.push(i);
    }
    return arr;
  }
  console.log(generateArray(4, 7));
  