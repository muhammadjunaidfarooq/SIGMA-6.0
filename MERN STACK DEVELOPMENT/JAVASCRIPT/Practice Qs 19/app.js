function concate(str) {
    let result = " ";
    for (let i=0; i<str.length; i++){
        result += str[i];
    }
    return result;
}

console.log(concate(["Hello ", "Junaid", "!"]));  