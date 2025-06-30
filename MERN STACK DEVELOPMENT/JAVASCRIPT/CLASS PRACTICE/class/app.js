let jsonRes = '{"fact":"The Maine Coon is 4 to 5 times larger than the Singapura, the smallest breed of cat.","length":84}';
console.log(jsonRes);
console.log(jsonRes.fact);

let validRes = JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);

let student = {
  name : "Junaid",
  marks : "93"
}

// let objToJson = JSON.stringify(student);
// console.log(objToJson);