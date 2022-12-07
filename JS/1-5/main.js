

function gruopArray(input) {
    if (!Array.isArray(input)) throw new Error("wrong input");
    let result = [];
    for (let item of input) {
        let array = item.split('-');
        for (let i = 0; i < array.length; i++) {
            if (result[i] === undefined) result = result.concat([[]]);
            if (!result[i].includes(array[i])) result[i].push(array[i]);
        }
    }
    return result;
}
console.log(gruopArray(["a-b-c-d", "a-b-f-g", "m-n-l-k", "m-o-p-j", "v-q-w-e", "x-z-p-j"]));

