const os=require('os');


//Info about the user
const user=os.userInfo();
console.log(user);

//Method returns the system uptime in seconds

const time=os.uptime();
console.log(`The system uptime is ${time} seconds`);

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOS);