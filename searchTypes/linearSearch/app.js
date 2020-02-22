/**
 * Linear search and calculation of it's time
*/

let arr = [10, 20, 30, 40, 50, 60, 70];

let toBeFoundNumber = 20;

function linearSearch(arr, num){
    for (let i in arr){
        if ( arr[i] == num)
            return i;
    }

    return -1;
}

console.time('lab');
console.log(linearSearch(arr, toBeFoundNumber));
console.timeEnd('lab');
