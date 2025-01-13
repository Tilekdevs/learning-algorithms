const arr = [1,2,6,5,3,9,0,7,4,8,12,2,66,34,7,5,8,954,45,3,2,234,-1,-35]
let count = 0

function selectionSort(array) {
	for(let i = 0; i < array.length; i++) {
		let indexMin = i
		for(let j = i+1; j < array.length; j++) {
			if(array[j] < array[indexMin]) {
				indexMin = j
			}
			count += 1
		}
		let tmp = array[i]
		array[i] = array[indexMin]
		array[indexMin] = tmp
	}
	return array
}

console.log(selectionSort(arr));
console.log(count);
