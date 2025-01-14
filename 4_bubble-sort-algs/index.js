const arr = [1,2,6,5,3,9,0,7,4,8,12,2,66,34,7,5,8,954,45,3,2,234,-1,-35]
let count = 0

function sort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[j+1] < arr[j]){
                let tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
            }
            count+=1
        }
    }
    return arr
}

console.log(sort(arr))
console.log(count)