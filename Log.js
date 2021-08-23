// Create a custom logging module (it's an Object):

var log = { 
	info: function(info) { 
		console.log('Info: ' + info);
	},
	warning: function(warning) {
		console.log('Warning: ' + warning);
	},
	error: function(error) {
		console.log('Error: ' + error);
	}
}
// exports to expose a function/obj/var as a module in node.js
module.exports = log			
