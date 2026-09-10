const arr = [1, 2, 2, 3, 4, 4, 5];
const result = [...new Set(arr)];
console.log(result);


function removeDuplicate(arr){
    return arr.filter((item,index) => {
        return arr.indexOf(item) === index;
    })
}

console.log(removeDuplicate(arr));