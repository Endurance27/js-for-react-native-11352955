// arrayManipulation.js
function processArray(arr) {
    return arr.map(num => num % 4 === 0 ? num * num : num * 3);
  }
  const inputArray = [1, 2, 3, 4, 5, 6];
  const resultArray = processArray(inputArray);
  
  console.log("Input Array:", inputArray);
  console.log("Result Array:", resultArray);



  function formatArrayStrings(stringArray, numberArray) {
    if (stringArray.length !== numberArray.length) {
        throw new Error('Both arrays must have the same length');
    }

    return stringArray.map((str, index) => {
        const num = numberArray[index];
        if (num % 4 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

// Example usage:
const strings = ["Endurance", "Adel", "cherry", "kiwi","apple"];
const numbers = [2, 3, 4, 5, 6];

const formattedStrings = formatArrayStrings(strings, numbers);
console.log(formattedStrings); // Output: "Endurance", "Adel", "cherry", "kiwi","apple"]






// Example input arrays
const names = ["Kofi", "Adel", "Esi"];
const modifiedNames = ["Emily", "Manuel", "Abena"];

function createUserProfiles(names, modifiedNames) {
  const userProfiles = [];
  for (let i = 0; i < names.length; i++) {
    const userProfile = {
      originalName: names[i],
      modifiedName: modifiedNames[i],
      id: i + 1,
    };
    userProfiles.push(userProfile);
  }
  return userProfiles;
}

// Example usage
const profiles = createUserProfiles(names, modifiedNames);
console.log(profiles);

