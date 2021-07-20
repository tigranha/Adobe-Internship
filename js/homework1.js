// 1. Given an array of numbers. Print frequency of each unique number. (Frequency is the
// count of particular element divided by the count of all elements)


function countFrequancy(arr){

    let length = arr.length;
    let map = new Map();
    
    for (let i = 0; i < length; i++) {
        if(map.has(arr[i]))
            map.set(arr[i], map.get(arr[i]) + 1)
        else
            map.set(arr[i], 1)
    }
     
    for (let i = 0; i < length; i++) {
      if (map.get(arr[i]) != -1)
      {
          console.log( arr[i] + ": " + map.get(arr[i])/length);
          map.set(arr[i], - 1);
      }
    }
}

// 2. Write a function that accepts a string(a sentence) as a parameter and finds the longest
// word within the string․ If there are several words which are the longest ones, print the
// last word(words can be separated by space, comma or hyphen).

function longestWord(string){

  let arr = string.split(/[\s.,.-]+/);
  let result = arr[0];

  for(let i = 1 ; i < arr.length ; i++){
    if(result.length <= arr[i].length){
    result = arr[i];
    } 
  }
  console.log(result)
}


// 3. Write a function to find longest substring in a given a string without repeating characters
// except space character.
// If there are several, return the last one. Consider that all letters are lowercase.


function longestUniqueSubstring(string) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length; j++) {
            let temp = string.substring(i, j);
            if (string.charAt(j) !== ' ' && temp.includes(string.charAt(j))) {
                if (temp.length >= result.length) {
                    result = temp;
                }
                break;
            }
        }
    }
    return result;
}

// 4. Write a function to compute a new string from the given one by moving the first char to
// come after the next two chars, so "abc" yields & "bca". Repeat this process for each
// subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end.


function replaceLetters(str){
    let result = '';
    let temp = '';

    for (let i = 0; i < str.length; i+=3){
        if (i + 3 > str.length){
            break;
        } else {
            result += str.substring(i, i+3).split('').reverse().join('');

        }
    }
    console.log(result);
}

// 5. Write a function, which receives an array as an argument which elements arrays of
// numbers. Find biggest negative number of each array. Return product of that numbers.If
// there is not any negative number in an array, ignore that one. Check that items of the
// given array are arrays.


function productOfNegatives(array) {

    if(array.length == 0) {
        console.log('Invalid Arguement');
        return ;
    }

    let result = undefined;
    let isResultInit = false;

    for(let i = 0; i < array.length; i++) {
        if(!Array.isArray(array[i])) {
            console.log('Invalid Arguement')
            return ;
        }

        tempArray = array[i];
        let maxNegative = 0;

        for(let j = 0; j < tempArray.length; j++) {
            if(tempArray[j] < 0) {
                if(maxNegative == 0 || maxNegative < tempArray[j]) {
                    maxNegative = tempArray[j];
                }
            }
        }

        if(maxNegative != 0) {
            if(!isResultInit) {    
                result = 1;           
                isResultInit = true;   
            }
            result *= maxNegative;
        }
    }

    if(result == undefined) {
        return "No negatives";
    }
    console.log(result);
}


// 6. Write a JavaScript function to get all possible subsets of length 3 of the given array.
// Assume that all elements in the array are unique.

function allPosibleSubsets(arr){
    
    let result = [];
    let current = [];
    let index = 0;
    if(arr.length === 1 || arr.length === 2 || arr.length === 3 ){
        console.log(arr);
        return;
    } else{
    for (let i = 0; i < arr.length-2; i++){
        for (let j = i+1; j < arr.length-1; j++){            
            for (let k = j+1; k < arr.length; k++){
                current[0] = arr[i];
                current[1] = arr[j];
                current[2] = arr[k];
                result[index] = current;
                current = [];
                index++;
            }
        }
    }
}
console.log(result)
}
