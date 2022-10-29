const {readFileSync, writeFileSync}=require('fs'); //Same as below commented line
//const fs=require('fs');
 
const first=readFileSync('./content/first.txt','utf-8');
const second=readFileSync('./content/second.txt','utf-8');

//console.log(first,second);

writeFileSync('./content/resultSync.txt',`Here is the result : ${first}, ${second}\n`,{flag:'a'});
