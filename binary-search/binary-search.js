'use strict';
// n log(n) ===> recursive call

// const split = (arr) => {
// 	const left = arr.slice(0, Math.ceil(arr.length / 2))
// 	const right = arr.slice(Math.ceil(arr.length / 2))
// 	return [left, right]
// }

// // Complete this algo
// const binarySearch = (array, target) => {
// 	if (array.length === 0){
// 		return false
// 	}
// 	if (array.length === 1) {
// 		return (array[0] === target)
// 	}
// 	const [left, right] = split(array);
// 	return (binarySearch(left, target) || binarySearch(right, target))
// };


/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

// constant time ===> build in method

// const binarySearch = (array, target) => {
// 	return (array.includes(target));
// }


// n ===> looping

const binarySearch = (array, target) => {

	let beginningPointer = 0;
	let endingPointer = array.length - 1;

	while (beginningPointer < endingPointer){
		if ((array[beginningPointer] === target || array[endingPointer] === target)){
			return true
		}

		endingPointer--;
		beginningPointer++;
	}

	return false
}

module.exports = binarySearch
