// ZMQ WebServer: PUB (server code) socket function:
async function runZMQServer() {
	const sock = new zmq.Publisher();
	await sock.bind("tcp://127.0.0.1:5555");	// or does this also have to be 8081???
	console.log("Publisher bound to port 5555");
	
	while (true) {
		console.log("Sending a multipart message envelope....what's that mean...?");
		await sock.send(["mmsHeader", "zmqTest!"]);
		await new Promise(resolve => setTimeout(resolve, 500));
		// Work in here?
	}
}

 /* training:
// const path = require("path");	
// console.log(`The file name is ${path.basename(__filename`)});
 */
// HTTP WebServer on local host port 8081:
var customHttp = require('http');				// import nodejs http module (keyword = "require")
const zmq = require('zeromq');					// import zmq module
var myLogModule = require('./Log.js');			// import Custom logging module: // Don't need full path: /Users/rachgaines/Desktop/nodeExample/Log.js');
	
myLogModule.info('Node.js started');			// Logging
	
// create server and handle requests in this function: 
var server = customHttp.createServer(function (req, res) {
	// Send the HTTP header
	// HTTP Status: 200 : OK
	// Content Type: text/plain
	
	myLogModule.info('Server just started on port 8081');

	if (req.url =='/') {
		// writeHead function "Sets response header" ((I dunno what that means yet))...
		// which is required to send a response
		res.writeHead(200, {'Content-Type': 'text/html'});
		// And set response content: 
		res.write('<html><body><p>This is the HOME Page.</p></body></html>');
		// end function Sends the response:
		res.end('Opening webpage is the \"Response\" to Server\'s \"open connection \" created?\n');
	}
	else if (req.url == '/data') {
		res.writeHead(200, { 'Content-Type': 'application/json'});
		res.write(JSON.stringify({message: "hey Gainesy..."}));
		res.end();
	}
	
	// HANDLE INCOMING REQUESTS in HERE:????? 
	runZMQServer();				// make publisher zmq socket - send msg
});

server.listen(8081);	// The listen method binds our server to this port (8081)
console.log('server running at http://127.0.0.1:8081/ riiiight Rach? ');


