var ip = require('ip');
var os = require('os');
var clc = require('cli-color');

console.log(" ")
console.log(" ")
console.log(" ")
console.log(clc.yellowBright('started the git daemon and npm-offline'));
console.log(" ")
console.log(clc.yellowBright('others can now clone and pull:'));
console.log(" ")
console.log(`git clone git://${ip.address()}/ piggyback`)
console.log("cd piggyback ")
console.log(`git remote add ${os.hostname()} git://${ip.address()}/`)
console.log(`git pull ${os.hostname()}`)
console.log(" ")
console.log(" ")
console.log(clc.yellowBright('use this machine\'s npm cache as registry:'));
console.log(" ")
console.log(`npm install --registry ${ip.address()}`)
console.log(" ")
console.log(" ")
console.log(clc.yellowBright('finally, here are the processes you might want to kill later :)'));
console.log(" ")
