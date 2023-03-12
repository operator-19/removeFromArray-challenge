const removeFromArray = function(arr, ...args) { // put two arguments 
    // ...args allows us to pass any number of args, which will be treated as an array
    const result = [] // create new array to hold elements that will remain after the removal process
    for (let i = 0; i < arr.length; i++) { // use a for loop to iterate over each element of the arr array
        if (!args.includes(arr[i])) { // if the current element is not in the args array, add it to the result array.
            result.push(arr[i])
        }
    }
    return result // return array from the function
};

// removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]

// original s
// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.

// var removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// }
//

// Do not edit below this line
module.exports = removeFromArray;
