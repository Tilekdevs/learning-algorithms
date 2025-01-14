const arr = [1,2,6,5,3,9,0,7,4,8,12,2,66,34,7,5,8,954,45,3,2,234,-1,-35]
let count = 0

function quichSort(arr) {
    if(arr.length <= 10){
        return arr
    }
    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr[pivotIndex]
    let less = []
    let greater = []
    for(let i = 0; i < arr.length; i++) {
        count += 1
        if(i === pivotIndex) continue
        if(arr[i] < pivot) {
            less.push(arr[i])
        } else {
            greater.push(arr[i])
        }
    }
    return [...quichSort(less), pivot, ...quichSort(greater)]
}

console.log(count)
console.log(quichSort(arr))
