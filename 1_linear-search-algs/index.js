const array = [1,2,6,5,3,9,0,7,4,8,12]

function linearSearch(array, item) {
	for(let i = 0; i <= array.length; i++) {
		if(array[i] === item) {
			return i
		}
	}
	return null
}

console.log(linearSearch(array, 8));
