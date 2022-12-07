function flatArray(input) {
    if (!Array.isArray(input)) throw new Error ("wrong input");
    let result =[]
    for (let item of input) {
        if (Array.isArray(item)){
            result = result.concat(flatArray(item))
        }else {
            result.push(item)
        }
    }return result
}
console.log(flatArray([10, [25, 13], [14, [55]], 2]));
console.log(flatArray([-1, 12, 20]));