const arr = [1, 2, 2, 3, 4, 4, 5];

function FindDuplidate(arr){
    return arr.filter((item,index) =>{
        return arr.indexOf(item) !== index;
    })
}

console.log(FindDuplidate(arr));