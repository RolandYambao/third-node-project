const myModule = require("./utils/myModule.js");
const fs = require("fs");

console.log(myModule);
console.log(myModule.anotherFunction);
console.log(myModule.redundantFunction);
console.log(myModule.supernumeraryFunction);
console.log(myModule.pointlessNumbers);
console.log(myModule.uselessObject);
console.log(myModule.uselessObject.oldThing.hmm);

fs.readFile('story.txt', 'utf8', function (err, data) {
    console.log(data);
});

const http = require('http');

// http.createServer((req, res) => {
//     res.write('No, World!');
//     res.end();
// })
//     .listen(8000);

const faker = require("faker");
const { random } = require("faker");
const randomLocality = {
    county: faker.address.county(),
    state: faker.address.state(),
    country: faker.address.country(),
}
console.log(randomLocality);