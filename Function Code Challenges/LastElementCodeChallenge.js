// Please write a function called lastElement which accepts a single array argument.  
// The function should return the last element of the array (without removing the element). 
//  If the array is empty, the function should return null.





function lastElement (arr){
    if (arr.length === 0){ // if the length of the array is 0 return null
        return null
    }else {                 // else return the array but using arr.length -1 to show the last index of the array
        return arr[arr.length - 1]
    }
}


// On execute
lastElement([3,5,7]) //7
lastElement([1]) //1
lastElement([]) //null