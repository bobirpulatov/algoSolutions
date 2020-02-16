
/**
 * Clockwise rotation of a given array
 * @param {number[]} arr
 * @param { boolean } [clockwise=true]
 * @returns {number[ number[] ]}
*/
function rotateArray(arr, clockwise=true) {
    let newArr = [];

    if (!clockwise)
        for (let i=0; i<arr.length; i++)
            arr[i].reverse();

    for (let i=0; i<arr[0].length; i++){
        let tempStorage = [];

        for (let j=0; j<arr.length; j++)
            tempStorage.push(arr[j][i])
        
        newArr.push( (clockwise) ? tempStorage.reverse() : tempStorage );
    }

    return newArr;
}

/** For example @var number[number[]] */
let givenArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let rotatedArray_1 = rotateArray(givenArray);
let rotatedArray_2 = rotateArray(givenArray, false);

console.log(rotatedArray_1);
console.log(rotatedArray_2);
