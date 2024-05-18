// arrayManipulation.js
function processArray(arr) {
    return arr.map(num => num % 4 === 0 ? num * num : num * 3);
  }
  const inputArray = [1, 2, 3, 4, 5, 6];
  const resultArray = processArray(inputArray);
  
  console.log("Input Array:", inputArray);
  console.log("Result Array:", resultArray);


