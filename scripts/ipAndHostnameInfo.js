var ip = require('ip');
var os = require('os');
var clc = require('cli-color');
const serve = require('serve');
const tcpPortUsed = require('tcp-port-used');
// https://tutorialedge.net/javascript/nodejs/executing-shell-scripts-with-nodejs/
const exec = require('child_process').exec
const fs = require('fs');
var open = require('open');
var pug = require('pug');


// find three ports which are not in use: one for the git daemon, one for serving the npm cache and one to serve the working directory to pull a node_modules tarball

// then start the git daemon and the two file servers


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


function findAvailableIpAdress () {

	testport = getRandomInt(1500, 65000);

	tcpPortUsed.check(testport, '127.0.0.1')
	.then(function(inUse) {
	    // console.log(`Port ${testport} usage: `+inUse);
	    if (inUse) {
	    	// console.log(`${testport}`)
	    	findAvailableIpAdresses ();
	    } else {
	    	exit
	    }
	}, function(err) {
	    console.error('Error on check:', err.message);

	});

	return testport;

}


// assign random number
// check
// if check repeat

// var git_port = findAvailableIpAdress ();
var npm_cache_port = findAvailableIpAdress ();
var cwd_port  = findAvailableIpAdress ();



const testscript = exec(`git daemon --verbose --export-all --base-path=.git --reuseaddr --strict-paths .git/`);

testscript.stdout.on('data', function(data){
    console.log(data);
    // sendBackInfo();
});


testscript.stderr.on('data', function(data){
    console.log(data);
    // triggerErrorStuff();
});


const serving_cwd = serve(__dirname+`/..`, {
  port: cwd_port,
  ignore: ['node_modules']
})

// // process.env.npm_package_config_cache

const serving_cache = serve(process.env.npm_config_cache, {
  port: npm_cache_port,
  ignore: ['node_modules']
})


function guideMessage() {

	console.log(" ")
	console.log(" ")
	console.log(" ")
	console.log(clc.yellowBright('started the git daemon and npm cache server'));
	console.log(" ")
	console.log(clc.yellowBright('others can now clone, pull and install dependencies from your machine:'));
	console.log(" ")
	console.log(clc.greenBright(`git clone git://${ip.address()}/ ${process.cwd().split('/').reverse()[0]}`))
	console.log("cd ${process.cwd().split('/').reverse()[0]}")
	console.log(`git remote add ${os.hostname()} git://${ip.address()}/`)
	console.log(`git pull ${os.hostname()}`)
	console.log(clc.greenBright(`npm install --cache ${ip.address()}:5747 --offline`))
	console.log("if it erros with the --offline option and you do have internet, try --prefer-offline")
	console.log(`npm install --cache ${ip.address()}:5747 --prefer-offline`)
	console.log(" ")
	console.log(clc.yellowBright(`as fallback if both npm installs error:`))
	console.log(`rm -rf node_modules # clean-up`)
	console.log(clc.greenBright(`curl http://${ip.address()}:5666/node_modules.tar.gz > node_modules.tar.gz`))
	console.log(`tar -xf node_modules.tar.gz`)
	console.log(" ")
	console.log(" ")

}


setTimeout(function() {
	guideMessage()
	renderHtml ()
}, 2000);


setTimeout(function() {
open(__dirname+'/../distribution-info.html');
}, 3000);


command_line_instructions_pref_offline = `npm install --cache ${ip.address()}:${npm_cache_port} --prefer-offline`
command_line_instructions_clean_node_modules = `rm -rf node_modules # clean-up`
command_line_instructions_curl = `curl http://${ip.address()}:${cwd_port}/node_modules.tar.gz > node_modules.tar.gz`
command_line_instructions_tar = `tar -xf node_modules.tar.gz`


function renderHtml () {
	pugTemplate = `
.info-container
	p
		pre.
			git clone git://${ip.address()}/ ${process.cwd().split('/').reverse()[0]}
			cd ${process.cwd().split('/').reverse()[0]}
			npm install --cache ${ip.address()}:${npm_cache_port} --offline
	hr
	p if that failed, try
		pre.
			${command_line_instructions_pref_offline}
	hr
	p last resort in case there is zero internet available:
		pre.
			${command_line_instructions_clean_node_modules}
			${command_line_instructions_curl}
			${command_line_instructions_tar}
	hr
	p also helpful to pull updates:
	p
		pre.
			git remote add ${os.hostname()} git://${ip.address()}/
			git pull ${os.hostname()}

	hr
	p.buildinfo built: ${Date()}

	style.
		p { margin: 0 0 0 0; }
		p + p { margin: 0.5em 0 0 0; }
		.info-container {
			font-family: sans-serif;
			font-size: 1.64em;
			font-weight: 900;
			background-color: pink;
			margin: auto;
			padding: 1em;
			position: relative;
			max-width: 80vw;
		}
		.buildinfo {
			font-size: 0.62em;
			font-weight: 100;
		}
	`


	fs.writeFile('distribution-info.html', pug.render(pugTemplate), (err) => {
	    // throws an error, you could also catch it here
	    if (err) throw err;

	    // success case, the file was saved
	    console.log('info file saved!');
	});

}
