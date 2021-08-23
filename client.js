/*
// Push-Pull client:
const zmq = require("zeromq");

async function run() {
	const sock = new zmq.Pull;
	
	sock.connect("tcp://127.0.0.1:3000");
	console.log("Worker connected to port 3000");
	
	for await (const [msg] of sock) {
		console.log("work: %s", msg.toString())	
	}
}
run();

*/
// Pub-Sub Client: 
const zmq = require("zeromq");

async function runClient() {
	console.log('Connecting to hello world serverrr');

	// create socket to talk to server: 
	const sock = new zmq.Subscriber();
	
	sock.connect("tcp://127.0.0.1:5555");
	sock.subscribe("mmsHeader");
	console.log("Subscriber connected to port 5555");

	for await ( const [topic, msg] of sock) {
		console.log("Received a msg :" + msg);	
		// How to respond back to server...???
		// sock.send(["mmsHeader", "I am ready... :) "]);
// 		console.log("Received a msg related to: ", topic, "containing message: " + msg);	
	}
}

runClient();
