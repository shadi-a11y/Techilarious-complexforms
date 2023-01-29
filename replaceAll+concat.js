function replaceAll(str, find, replace) {
    return str.split(find).join(replace);
}

// Example on usage

const text = "The bootcamp is going very well, the bootcamp is amazing";

const newText = replaceAll(text, "bootcamp", "internship");

console.log(newText);
  

function concat(...arrays) {
    let result = [];
    arrays.forEach(array => {
      for (let i = 0; i < array.length; i++) {
        result.push(array[i]);
      }
    });
    return result;
}

// Example on usage

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let combinedArray = concat(array1, array2, array3);
console.log(combinedArray); 
