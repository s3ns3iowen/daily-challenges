// Given a list of numbers and a number k, 
// return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

function arraySum(array, k){
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++){
            if (array[i] + array[j] == k) {
                console.log("There is a match!");
                break
            }
        }
    }
}

var array1 = [10, 15, 3, 7];
arraySum(array1, 17);
