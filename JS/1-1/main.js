function arrayDepth(input){
    if (!Array.isArray(input)) throw new Error("wronge input") ;
    let count =1;
    for (let i = 0 ; i< input.length ; i++) {
        if(Array.isArray(input[i])){
            input = input.flat();
            count += 1
        }
    }return count;
}
console.log(arrayDepth([10, [25, 13], [14, [55]], 2]));
console.log(arrayDepth([-1, 12, 20]));
console.log(arrayDepth("hhshhs"));