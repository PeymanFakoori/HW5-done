function case_insensitive_search(string, word){
    if (typeof(string) !== 'string' || typeof(word) !== 'string') {
        throw new Error("wrong input");
    }
    let stiringLowerCased = string.toLowerCase();
    let wordLowerCased = word.toLowerCase();
    let res = stiringLowerCased.includes(wordLowerCased);
    if(res === true) return true;
    else return false;
    };
    console.log(case_insensitive_search('hello word', 'Hello'));
    console.log(case_insensitive_search('hello word', 'hello'));
    console.log(case_insensitive_search('hello word', 'hi'));