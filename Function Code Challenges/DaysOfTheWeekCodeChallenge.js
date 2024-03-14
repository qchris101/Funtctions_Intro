// Write a function called returnDay. this function takes in one parameter (a number from 1-7) 
// and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  
// If the number is less than 1 or greater than 7, the function should return null. 
// In some countries Sunday is treated as the first day of the week, 
// but for this exercise we will use Monday as the first day.

// returnDay(1) // "Monday"
// returnDay(7) // "Sunday"
// returnDay(4) // "Thursday"
// returnDay(0) // null


function returnDay(num){
    if (num < 1 || num > 7){ // Checking for null by checking if num is lower than 1 or greater than 7
        return null
    }
    const days = { // Creating and Object holding all of our days with num keys
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday"
    }
    return days[num]    // Simply returning the day[with the num we inserted] so returnDay(3) gives us days[2] which is "Tuesday"
}