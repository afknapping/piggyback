var ip = require('ip');
var os = require('os');
var clc = require('cli-color');

console.log(" ")
console.log(" ")
console.log(" ")
console.log(clc.yellowBright('started the git daemon and npm-offline'));
console.log(" ")
console.log(clc.yellowBright('others can now clone, pull and install dependencies from your machine:'));
console.log(" ")
console.log(clc.greenBright(`git clone git://${ip.address()}/ piggyback`))
console.log("cd piggyback ")
console.log(`git remote add ${os.hostname()} git://${ip.address()}/`)
console.log(`git pull ${os.hostname()}`)
console.log(clc.greenBright(`npm install --registry ${ip.address()}:12644`))
console.log(" ")
console.log(" ")
console.log("you stop the services by running")
console.log(" ")
console.log(clc.yellowBright('npm run distribute-stop'));
console.log(" ")
