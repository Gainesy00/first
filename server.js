/*
// Just a general server example: 

// require - loads a module:
// var - the HTTP instance is stored as a variable: 
var http = require("http");			// Import node.js core module (http module) 

// create server and handle the requests in this function: 
http.createServer(function (request, response) {
	// Send the HTTP header
	// HTTP Status: 200 : OK
	// Content Type: text/plain
	
	response.writeHead(200, {'Content-Type' : 'text/plain'});

	// Send the response body as "Hello World"sss
	response.end('Hello, World!!\n test, test!!');
	
}).listen(8081);		// Listen for incoming requests on port 8081
*/


// Log in to that IP and Port (local) and it works - website tells me "Hello, World!"
// Console will print the message:
// console.log('server running at http://127.0.0.1:8081/');

/*
// ZMQ Push/PUll in nod.js server example: 
const zmq = require("zeromq");			// create init zmq module

async function run() {
	const sock = new zmq.Push;
	await sock.bind("tcp://127.0.0.1:3000");
	console.log("Producer bound to port 30000");
	
	while(true) {
	await sock.send("some work");
	await new Promise(resolve => setTimeout(resolve, 500));
	}
}
run();
*/

// Most recent server/client that worked: Pub-Sub: Server:
const zmq = require('zeromq');

async function run() {
	const sock = new zmq.Publisher();
	
// 	await sock.bind('tcp://*:5555');
	await sock.bind("tcp://127.0.0.1:5555");
	console.log("Publisher bound to port 5555");
	
	while (true) {
		console.log("Sending a multipart message envelope....what's that mean...?");
		await sock.send(["headerChicks", "peep! peep!"]);
		await new Promise(resolve => setTimeout(resolve, 500));
		// Work in here?
	}
}

run();

/* This didn't work I don't think...// var socket = zmq.socket*("push");	// create new socket
var counter = 0;

function logToConsole(message) {
	console.log("[" + new Date().toLocaleTimeString() + "] " + message);
	}
	
function sendMessage (message) {
	logToConsole("Sending: " + message);
	socket.send(message);
}

// Begin listening for connection on all IP addresses on port 9998
// Bind sockets to IP addresses on port 9998
socket.bind("tcp://*:9998", function (error) {
	if (error) {
		logToConsole("Failed to bind socket: " + error.message);
		process.exit(0);
	}
	else {
		logToConsole("Server listening on port 9998");
		
		// Increment the counter and send the value to the clients every second
		setInterval(function () { sendMessage(counter++); }, 1000);
		}
});
*/

