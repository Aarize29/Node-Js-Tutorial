const path=require('path');

console.log(path.sep);
const joinFunction =path.join('/content','subFolder','text.txt');
console.log(joinFunction);

const base=path.basename(joinFunction);
console.log(base);

const absolute=path.resolve(__dirname,'content','subFolder','text.txt');
console.log(absolute);