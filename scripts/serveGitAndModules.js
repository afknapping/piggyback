const ip = require('ip');
const os = require('os');
const serve = require('serve');
const tcpPortUsed = require('tcp-port-used');
// https://tutorialedge.net/javascript/nodejs/executing-shell-scripts-with-nodejs/
const exec = require('child_process').exec
const fs = require('fs');
var open = require('open');
var pug = require('pug');


module.exports = function ServeGitAndModules () {

	// find three ports which are not in use: one for the git daemon, one for serving the npm cache and one to serve the working directory to pull a node_modules tarball

	// start the git daemon and the two file servers

	// render an html file with the p2p dev mode info, to be shown inline the electron app

	const config = {
		cwd_port: findAvailableIpAdress (),
		npm_cache_port: findAvailableIpAdress (),
		ip: ip.address(),
		hostname: os.hostname()
	}



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



	const git_daemon = exec(`git daemon --verbose --export-all --base-path=.git --reuseaddr --strict-paths .git/`);
	const create_tarball = exec(`tar -czf node_modules.tar.gz node_modules`)

	git_daemon.stdout.on('data', function(data){
	    console.log(data);
	    // sendBackInfo();
	});
	git_daemon.stderr.on('data', function(data){
	    console.log(data);
	    // triggerErrorStuff();
	});

	create_tarball.stdout.on('data', function(data){
	    console.log(data);
	    // sendBackInfo();
	});
	create_tarball.stderr.on('data', function(data){
	    console.log(data);
	    // triggerErrorStuff();
	});


	const serving_cwd = serve(__dirname+`/..`, {
	  port: config.cwd_port,
	  ignore: ['node_modules']
	})

	// process.env.npm_package_config_cache
	const serving_cache = serve(process.env.npm_config_cache, {
	  port: config.npm_cache_port,
	  ignore: ['node_modules']
	})


	// TODO in case of pulling out a module: move to plain html inline template literal
	function renderDistributionInfoHtmlToFile () {

		fs.writeFile('distribution-info.html', pug.renderFile('.distribution-info.pug', {config}), (err) => {
			    // throws an error, you could also catch it here
		    	if (err) throw err;
		    	// success case, the file was saved
		    	console.log('info file saved!');
		});

	}

	setTimeout(function() {
		renderDistributionInfoHtmlToFile ()
		open ('./distribution-info.html')
	}, 3000);

	return config

}